import React from "react";
import "./Stock.css";
import axios from 'axios';

//other stock api sources//

//8zi-YhnjrsDJXgt4wSr9-quandl-https://www.quandl.com/api/v3/datasets/EOD/AAPL.csv?api_key=8zi-YhnjrsDJXgt4wSr9
//N3O4OQ6C65WZO9Z3
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=N3O4OQ6C65WZO9Z3
//https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5

class Stock extends React.Component {
  state = {
    stock: [],
    showWidgit: true
  }

  componentDidMount() {
    console.log("componentDidMount")
    axios.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=ndaq,aapl,googl&types=quote,chart&range=1m&last=5")
      .then(res => {
        const companyName = res.data.NDAQ.quote.companyName;
        const current = res.data.NDAQ.quote.iexRealtimePrice;
        const open = res.data.NDAQ.quote.open;
        const high = res.data.NDAQ.quote.high;
        const low = res.data.NDAQ.quote.low;
        const close = res.data.NDAQ.quote.close;
        
        if (this.props.showStockComp === true) {
        this.setState({
          companyName: res.data.NDAQ.quote.companyName,
          current: res.data.NDAQ.quote.iexRealtimePrice,
          open: res.data.NDAQ.quote.open,
          high: res.data.NDAQ.quote.high,
          low: res.data.NDAQ.quote.low,
          close: res.data.NDAQ.quote.close,
          showWidgit: true
        });
      }
        //console.log(companyName);
      });
  }

  clickExit() {
    this.setState({
      showWidgit: false
    })
    this.props.resetStockComp();
  }

  render() {
    return (
      <div>
        {this.state.showWidgit?
        <div class="card">
          <div class="card-header stock-header">
            <div class="x-box" onClick={()=>this.clickExit()}>
              <p class="x-letter">x</p>
            </div>
            <h2 class="widgit-title">Stocks</h2>
          </div>
          <div class="card-body stock-body">
              <p id="stock-name"><strong>Nasdaq, Inc.</strong></p>
              <p id="stock-current"><strong>Current Price:</strong> {this.state.current}</p>
            <div id="open-close">
              <p id="stock-open"><strong>Open:</strong> {this.state.open}</p>
              <p id="stock-close"><strong>Close:</strong> {this.state.close}</p>
            </div>
            <div id="low-high">
              <p id="stock-low"><strong>Low:</strong> {this.state.low}</p>
              <p id="stock-high"><strong>High:</strong> {this.state.high}</p>
            </div>
          </div>
        </div>
        :null}
      </div>
    );
  }
}

export default Stock;