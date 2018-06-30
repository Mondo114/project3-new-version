import React from "react";
import "./News.css";
import axios from "axios";

const APIKEY = "287abd0f432e43f5aa5f8d91fa9b1663";

class News extends React.Component {

state = {
  articles: [],
  newsSource: "",
  showWidgit: true
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
fox-news
msnbc
nbc-news
newsweek
politico
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
  this.setState({newsSource: this.props.newsSource})
  // console.log("this.props.newsSource: " + this.props.newsSource);
  this.getNews(this.props);
}

componentWillReceiveProps(nextProps) {
// console.log("nextProps: " , nextProps);
  this.getNews(nextProps);
  if (this.props.showNewsComp === true) {
    this.setState({
      showWidgit: true
    })
  }
}

getNews = data => {
  axios.get(`https://newsapi.org/v2/top-headlines?sources=${data.newsSource}&apiKey=${APIKEY}`)
    .then(res => {
      var indexof = JSON.stringify(res).indexOf("[");
      var last = JSON.stringify(res).lastIndexOf('},"status"');
      var newString = JSON.stringify(res).slice(indexof, last);
      var newArray = JSON.parse(newString);
      console.log("newArray: " + newArray)

      this.setState({
        articles: newArray,
        sourceName: newArray[0].source.name
      })
    }
  )
}

  clickExit() {
    this.setState({
      showWidgit: false
    })
    this.props.resetNewsComp();
  }

  render() {
    console.log("this.state.articles: " + this.state.articles);
    return (
      <div>
        {this.state.showWidgit?
        <div class="card news-body">
          <div class="card-header news-header">
            <div class="x-box" onClick={()=>this.clickExit()}>
              <p class="x-letter">x</p>
            </div>
            <h2 class="widgit-title">News</h2>
          </div>
          
          <div class="card-body">
          
          <p><strong>{this.state.sourceName}</strong></p>

          {this.state.articles.map((article, index) => {
          if (index < 10) {
            return (
              <div key={article.url}>
                <a class="card-link" target="_blank" href={article.url}>{article.title}</a>
                <hr/>
              </div>
            ) 
          }
        })}
        </div>
      </div>
      :null}
    </div>
  )}
};

export default News;