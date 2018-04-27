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
import ReactDOM from 'react-dom';
import { Draggable, Droppable } from 'react-drag-and-drop'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
    render() { 
        return(
        <div class= "wrapper">
            <div class= "col-lg-12">
            
                <Draggable class="col-md-4" type="widget" data="sports"><Sports/></Draggable>
                <Draggable class="col-md-4" type="widget" data="stock"><Stock/></Draggable>
                <Draggable class="col-md-4" type="widget" data="weather"><Weather/></Draggable>
                <Draggable class="col-md-4" type="widget" data="news"><News/></Draggable>
            
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
