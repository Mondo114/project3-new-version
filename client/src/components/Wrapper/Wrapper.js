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

// const getItems = count => {
// var arr = [<Sports />, <Stock />, <News />, <Weather />, <Weather />, <Stock />]
// return (
// Array.from({ length: count }, (v, k) => k).map(k => ({
//   id: `widget-${k}`,
//   content: arr[k],
// }))
// )
// };

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
// const result = Array.from(list);
// const [removed] = result.splice(startIndex, 1);
// result.splice(endIndex, 0, removed);

// return result;
// };

// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
// // some basic styles to make the items look a bit nicer
// userSelect: 'none',
// padding: grid * 2,
// margin: `0 ${grid}px 0 0`,

// // change background colour if dragging
// background: isDragging ? 'lightgreen' : 'grey',

// // styles we need to apply on draggables
// ...draggableStyle,
// });

// const getListStyle = isDraggingOver => ({
// background: isDraggingOver ? 'lightblue' : 'lightgrey',
// display: 'flex',
// padding: grid,
// overflow: 'auto',
// });

// class Wrapper extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     items: getItems(6),
//   };
//   this.onDragEnd = this.onDragEnd.bind(this);
// }

// onDragEnd(result) {
//   // dropped outside the list
//   if (!result.destination) {
//     return;
//   }

//   const items = reorder(
//     this.state.items,
//     result.source.index,
//     result.destination.index
//   );

//   this.setState({
//     items,
//   });
// }

// // Normally you would want to split things out into separate components.
// // But in this example everything is just done in one place for simplicity
// render() {
//   return (
//     <DragDropContext onDragEnd={this.onDragEnd}>
//       <Droppable droppableId="droppable" direction="horizontal">
//         {(provided, snapshot) => (
//           <div
//             ref={provided.innerRef}
//             style={getListStyle(snapshot.isDraggingOver)}
//             {...provided.droppableProps}
//           >
//             {this.state.items.map((widget, index) => (
//               <Draggable key={widget.id} draggableId={widget.id} index={index}>
//                 {(provided, snapshot) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     style={getItemStyle(
//                       snapshot.isDragging,
//                       provided.draggableProps.style
//                     )}

//                   >
//                     {widget.content}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }
// }

// // Put the thing into the DOM!

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
            
                {this.props.state.showNewsComp ? <Draggable class="col-md-4" type="widget" data="news"><News showNewsComp={this.props.state.showNewsComp} showComp={(selection) => this.props.showComp} resetNewsComp={this.props.resetNewsComp} newsSource = {this.props.newsChoice}/></Draggable> : null}
                {this.props.state.showSportsComp ? <Draggable class="col-md-4" type="widget" data="sports"><Sports showSportsComp={this.props.state.showSportsComp} showComp={(selection) => this.props.showComp} resetSportsComp={this.props.resetSportsComp} newsSource = {this.props.sportsNewsChoice}/></Draggable> : null}
                {this.props.state.showSpecialComp ?<Draggable class="col-md-4" type="widget" data="special"><Special showSpecialComp={this.props.state.showSpecialComp} showComp={(selection) => this.props.showComp} resetSpecialComp={this.props.resetSpecialComp} newsSource = {this.props.specialNewsChoice}/></Draggable> : null}
                {this.props.state.showStockComp ? <Draggable class="col-md-4" type="widget" data="stock"><Stock showStockComp={this.props.state.showStockComp} showComp={(selection) => this.props.showComp} resetStockComp={this.props.resetStockComp}/></Draggable> : null}
                {this.props.state.showWeatherComp ? <Draggable class="col-md-4" type="widget" data="weather"><Weather showWeatherComp={this.props.state.showWeatherComp} showComp={(selection) => this.props.showComp} resetWeatherComp={this.props.resetWeatherComp}/></Draggable>: null}
                {this.props.state.showClockComp ? <Draggable class="col-md-4" type="widget" data="clock"><Clock showClockComp={this.props.state.showClockComp} showComp={(selection) => this.props.showComp} resetClockComp={this.props.resetClockComp}/></Draggable> : null}
            
                <Droppable
                    types={["widget"]}  
                    onDrop={this.onDrop.bind(this)}>
                    <div className="col-md-4 test"></div>
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
