import React from "react";
import "./Wrapper.css";
import Clock from "./../Clock";
import News from "./../News";
import Reddit from "./../Reddit";
import Sports from "./../Sports";
import Stock from "./../Stock";
import Twitter from "./../Twitter";
import Weather from "./../Weather";
import Youtube from "./../Youtube";
import Special from "./../Special";
import { Draggable, Droppable } from 'react-drag-and-drop'


class Wrapper extends React.Component {
     
state = {
    newsSource: "",
    sportsNewsSource: "",
    specialNewsSource: ""
}

componentWillMount() {
    this.setState({
        newsSource: this.props.newsChoice,
        sportsNewsSource: this.props.sportsNewsChoice,
        specialNewsSource: this.props.specialNewsChoice
    })
}

    render() { 
        console.log(this.props)
        return(
        <div class= "wrapper">
            <div class= "col-lg-12">
            
                <Draggable class="col-md-4" type="widget" data="sports"><Sports newsSource = {this.props.sportsNewsChoice}/></Draggable>
                <Draggable class="col-md-4" type="widget" data="stock"><Stock/></Draggable>
                <Draggable class="col-md-4" type="widget" data="weather"><Weather/></Draggable>
                <Draggable class="col-md-4" type="widget" data="news"><News newsSource = {this.props.newsChoice}/></Draggable>
                <Draggable class="col-md-4" type="widget" data="news"><Special newsSource = {this.props.specialNewsChoice}/></Draggable>
            
            <Droppable
                types={["widget"]}  
                onDrop={this.onDrop.bind(this)}>
                <div className="col-md-4"></div>
            </Droppable>
            </div>
        </div>
    )}
    onDrop(data) {
        console.log(data)
        // => Sports  
    }
}

// const Wrapper = props => <main className="wrapper" {...props} />;

export default Wrapper;
