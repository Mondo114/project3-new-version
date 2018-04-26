import React from "react";
import "./News.css";
import axios from "axios";

const APIKEY = "89cfe00e2a89455d86cebbebd6b4c4df";

class News extends React.Component {

state = {
  articles: [],
  source: "abc-news"

}

componentDidMount() {
  axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.state.source}&apiKey=${APIKEY}`)
  .then(res => {
    var indexof = JSON.stringify(res).indexOf("[");
    var last = JSON.stringify(res).lastIndexOf('},"status"');
    var newString = JSON.stringify(res).slice(indexof, last);
    var newArray = JSON.parse(newString);
    console.log(newArray)
    this.setState({
      articles: newArray
    })}
  )
}

  render() {
    console.log("this.state.articles: " + this.state.articles);
    return (
      <div class="card">
      <div class="card-header">
        <h2>News</h2>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          
        {this.state.articles.map((article, index) => {
         if (index < 5) {
          return (
            <div>
              <li class="list-group-item first"><a target="_blank" href={article.url}>{article.title}</a></li>
            </div>

          ) 
        }
      })}
      </ul>
      </div>
    </div>  
        
  


  )}
};

export default News;