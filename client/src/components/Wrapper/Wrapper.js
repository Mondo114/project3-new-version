import React from "react";
import ReactDOM from 'react-dom';
import "./Wrapper.css";
import Clock from "./../Clock";
import News from "./../News";
import Sports from "./../Sports";
import Stock from "./../Stock";
import Weather from "./../Weather";
import Special from "./../Special";
import { Draggable, Droppable } from 'react-drag-and-drop'
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
            
                <Draggable class="col-md-4" type="widget" data="news"><News newsSource = {this.props.newsChoice}/></Draggable>
                <Draggable class="col-md-4" type="widget" data="sports"><Sports newsSource = {this.props.sportsNewsChoice}/></Draggable>
                <Draggable class="col-md-4" type="widget" data="news"><Special newsSource = {this.props.specialNewsChoice}/></Draggable>
                <Draggable class="col-md-4" type="widget" data="stock"><Stock/></Draggable>
                <Draggable class="col-md-4" type="widget" data="weather"><Weather/></Draggable>
                <Draggable class="col-md-4" type="widget" data="clock"><Clock/></Draggable>
            
                {/* <Droppable
                    types={["widget"]}  
                    onDrop={this.onDrop.bind(this)}>
                    <div className="col-md-4 test"></div>
                </Droppable> */}
            </div>
        </div>
    )}

    onDrop(data) {
        console.log(data)
        // => Sports  
    }
}

export default Wrapper;
