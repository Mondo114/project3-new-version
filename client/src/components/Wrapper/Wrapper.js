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
import { Draggable, Droppable } from 'react-drag-and-drop'
 
class App extends React.Component {
    render() { 
        return(
        <div>
            <ul>
                <Draggable type="widget" data="sports"><li><Sports/></li></Draggable>
                <Draggable type="widget" data="stock"><li><Stock/></li></Draggable>
                <Draggable type="widget" data="weather"><li><Weather/></li></Draggable>
            </ul>
            <Droppable>
                types={['widget']}  
                onDrop={this.onDrop.bind(this)}
                <ul className="uiBox"></ul>
            </Droppable>
        </div>
    )}
    onDrop(data) {
        console.log(data)
        // => Sports  
    }
}





export default Wrapper;
