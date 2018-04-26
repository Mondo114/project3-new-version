import React from "react";
import "./News.css";
import axios from "axios";

const APIKEY = "89cfe00e2a89455d86cebbebd6b4c4df";

class News extends React.Component {

state = {
  articles: [],
  source: "abc-news"
}

/* News API Sources
abc-news
bbc-news
business-insider
buzzfeed
cbc-news
cbs-news
cnbc
cnn
crypto-coins-news
msnbc
nbc-news
the-huffington-post
the-new-york-times
the-telegraph
the-wall-street-journal
the-washington-post
the-washington-times
time
usa-today
*/

componentDidMount() {
  axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.state.source}&apiKey=${APIKEY}`)
  .then(res => {
    var indexof = JSON.stringify(res).indexOf("[");
    var last = JSON.stringify(res).lastIndexOf('},"status"');
    var newString = JSON.stringify(res).slice(indexof, last);
    var newArray = JSON.parse(newString);
    console.log(newArray)
    this.setState({
      articles: newArray,
      sourceName: newArray[0].source.name
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
        
        <p>{this.state.sourceName}</p>

        {this.state.articles.map((article, index) => {
         if (index < 10) {
          return (
            <div>
              <a class="card-link" target="_blank" href={article.url}>{article.title}</a>
              <br/>
              <br/>
            </div>
          ) 
        }
      })}
      
      </div>
    </div>  
        
  


  )}
};

export default News;