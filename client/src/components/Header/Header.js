import React from "react";
import "./Header.css";

const Header = (props) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <span class="letter-f">f</span>
    <span class="letter-r">r</span>
    <span class="letter-i">i</span>
    <span class="letter-j">j</span>
    <span class="letter-apostrophe">'</span>
    <span class="letter-i2">i</span>
    <span class="letter-t">t</span>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          News
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=> props.changeNews("abc-news")}>ABC News</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("bbc-news")}>BBC News</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("business-insider")}>Business Insider</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("buzzfeed")}>Buzzfeed</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("cbc-news")}>CBC News</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("cbs-news")}>CBS News</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("cnbc")}>CNBC</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("cnn")}>CNN</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("fox-news")}>Fox News</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("msnbc")}>MSNBC</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("nbc-news")}>NBC News</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("newsweek")}>Newsweek</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("politico")}>Politico</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("the-huffington-post")}>The Huffington Post</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("the-new-york-times")}>The New York Times</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("the-telegraph")}>The Telegraph</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("the-wall-street-journal")}>The Wall Street Journal</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("the-washington-post")}>The Washington Post</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("the-washington-times")}>The Washington Times</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("time")}>Time</a>
          <a class="dropdown-item" onClick={()=> props.changeNews("usa-today")}>USA Today</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sports
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("bbc-sport")}>BBC Sports</a>
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("espn")}>ESPN</a>
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("fox-sports")}>Fox Sports</a>
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("nfl-news")}>NFL News</a>
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("nhl-news")}>NHL News</a>
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("talksport")}>TalkSport</a>
          <a class="dropdown-item" onClick={()=> props.changeSportsNews("the-sport-bible")}>SportBible</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Special Interest
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("crypto-coins-news")}>Crypto Coins News</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("engadget")}>Engadget</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("entertainment-weekly")}>Entertainment Weekly</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("hacker-news")}>Hacker News</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("ign")}>IGN</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("medical-news-today")}>Medical News Today</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("mtv-news")}>MTV News</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("national-geographic")}>National Geographic</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("new-scientist")}>New Scientist</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("next-big-future")}>Next Big Future</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("polygon")}>Polygon</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("reddit-r-all")}>Reddit</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("t3n")}>T3n</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("the-verge")}>The Verge</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("vice-news")}>Vice News</a>
          <a class="dropdown-item" onClick={()=> props.changeSpecialNews("wired")}>Wired</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Stocks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Weather</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Clock</a>
      </li>
      <li class="nav-item date-display">
        <a class="nav-link">Today's Date: &nbsp; {today}</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+ dd
} 
if(mm<10) {
    mm = '0'+ mm
} 
today = mm + '/' + dd + '/' + yyyy;


export default Header;
