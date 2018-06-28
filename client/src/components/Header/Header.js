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
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("abc-news")
            props.showComp('news')
            }
          }>ABC News</a>
          <a class="dropdown-item" onClick={()=>  {
            props.changeNews("bbc-news")
            props.showComp('news')
            }
        
        }>BBC News</a>
          <a class="dropdown-item" onClick={()=>  {
            props.changeNews("business-insider")
            props.showComp('news')
            }
        }>Business Insider</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("buzzfeed")
            props.showComp('news')
            }
        }>Buzzfeed</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("cbc-news")
            props.showComp('news')
            }
        }>CBC News</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("cbs-news")
            props.showComp('news')
            }
        }>CBS News</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("business-cnbc")
            props.showComp('news')
            }
        }>CNBC</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("cnn")
            props.showComp('news')
            }
        }>CNN</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("fox-news")
            props.showComp('news')
            }
        }>Fox News</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("msnbc")
            props.showComp('news')
            }
        }>MSNBC</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("nbc-news")
            props.showComp('news')
            }
        }>NBC News</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("newsweek")
            props.showComp('news')
            }
        }>Newsweek</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("politico")
            props.showComp('news')
            }
        }>Politico</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("the-huffington-post")
            props.showComp('news')
            }
        }>The Huffington Post</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("the-new-york-times")
            props.showComp('news')
            }
        }>The New York Times</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("the-telegraph")
            props.showComp('news')
            }
        }>The Telegraph</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("the-wall-street-journal")
            props.showComp('news')
            }
        }>The Wall Street Journal</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("the-washington-post")
            props.showComp('news')
            }
        }>The Washington Post</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("the-washington-times")
            props.showComp('news')
            }
        }>The Washington Times</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("time")
            props.showComp('news')
            }
        }>Time</a>
          <a class="dropdown-item" onClick={()=> {
            props.changeNews("usa-today")
            props.showComp('news')
            }
        }>USA Today</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sports
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=> {
            props.changeSportsNews("bbc-sport")
            props.showComp('sports')
          }
            }>BBC Sports</a>
          <a class="dropdown-item" onClick={()=>{
            props.changeSportsNews("espn")
            props.showComp('sports')
          }
        }>ESPN</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSportsNews("fox-sports")
          props.showComp('sports')
          }
          }>Fox Sports</a>
          <a class="dropdown-item" onClick={()=>{
          props.changeSportsNews("nfl-news")
          props.showComp('sports')
          }
          }>NFL News</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSportsNews("nhl-news")
          props.showComp('sports')
          }
        }>NHL News</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSportsNews("talksports")
          props.showComp('sports')
          }}>TalkSport</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSportsNews("the-sports-bible")
          props.showComp('sports')
          }}>SportBible</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Special Interest
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("crypto-coins-news")
          props.showComp('special')
        }
        }>Crypto Coins News</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("engadget")
          props.showComp('special')
        }
        }>Engadget</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("entertainment-weekly")
          props.showComp('special')
        }
        }>Entertainment Weekly</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("hacker-news")
          props.showComp('special')
        }
        }>Hacker News</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("ign")
          props.showComp('special')
        }
        }>IGN</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("medical-news-today")
          props.showComp('special')
        }
        }>Medical News Today</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("mtv-news")
          props.showComp('special')
        }
        }>MTV News</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("national-geographic")
          props.showComp('special')
        }
        }>National Geographic</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("new-scientist")
          props.showComp('special')
        }
        }>New Scientist</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("next-big-future")
          props.showComp('special')
        }
        }>Next Big Future</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("polygon")
          props.showComp('special')
        }
        }>Polygon</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("reddit-r-all")
          props.showComp('special')
        }}>Reddit</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("t3n")
          props.showComp('special')
        }}>T3n</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("the-verge")
          props.showComp('special')
        }}>The Verge</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("vice-news")
          props.showComp('special')
        }
        }>Vice News</a>
          <a class="dropdown-item" onClick={()=> {
          props.changeSpecialNews("wired")
          props.showComp('special')
        }}>Wired</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onClick={()=>{
            
            props.showComp('stock')}}>Stocks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onClick={()=>{
            
            props.showComp('weather')}}>Weather</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"onClick={()=>{
            
            props.showComp('clock')}}>Clock</a>
      </li>
      
    </ul>
    <li class="nav-item date-display">
        <a class="nav-link">Today's Date: &nbsp; {today}</a>
      </li>
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

if (dd < 10) {
    dd = '0'+ dd
} 
if (mm < 10) {
    mm = '0'+ mm
} 
today = mm + '/' + dd + '/' + yyyy;


export default Header;
