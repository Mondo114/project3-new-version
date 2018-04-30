import React from "react";
import "./Wrapper.css";
import Clock from "./../Clock";
import News from "./../News";
import Sports from "./../Sports";
import Stock from "./../Stock";
import Weather from "./../Weather";
import ReactDOM from 'react-dom';
import Special from "./../Special";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const getItems = (props, count, offset = 0) => {
    var arr = [<Sports newsSource = {props.sportsNewsChoice}/>, <Stock />, <News newsSource = {props.newsChoice}/>, <Weather />, <Special newsSource = {props.specialNewsChoice}/>, <Clock />]
    return (
    Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `widget-${k + offset}`,
    content: arr[k + offset]
    }))
    )
};
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};
// ------------------>
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};
// ------------------^
const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
// some basic styles to make the items look a bit nicer
// userSelect: 'none',
padding: grid * 2,
// margin: `0 ${grid}px 0 0`,
// change background colour if dragging
background: isDragging ? 'lightgreen' : 'grey',
// styles we need to apply on draggables
...draggableStyle,
});
const getListStyle = isDraggingOver => ({
background: isDraggingOver ? 'lightblue' : 'lightgrey',
display: 'flex',
padding: grid,
// overflow: 'auto',
});

class Wrapper extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    items: getItems(props, 3),
    selected: getItems(props, 3, 3)
  };
  this.onDragEnd = this.onDragEnd.bind(this);
}
// ---------------->
id2List = {
    droppable: 'items',
    droppable2: 'selected'
};
getList = id => this.state[this.id2List[id]];
// ------------- ^
onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
        return;
    }
    if (source.droppableId === destination.droppableId) {
        const items = reorder(
            this.getList(source.droppableId),
            source.index,
            destination.index
        );
        let state = { items };
        if (source.droppableId === 'droppable2') {
            state = { selected: items };
        }
        this.setState(state);
    } else {
        const result = move(
            this.getList(source.droppableId),
            this.getList(destination.droppableId),
            source,
            destination
        );
        this.setState({
            items: result.droppable,
            selected: result.droppable2
        });
    }
};
// Normally you would want to split things out into separate components.
// But in this example everything is just done in one place for simplicity
render() {
  return (
        
            <DragDropContext class="wrapper" onDragEnd={this.onDragEnd}>
                <Droppable class="col-lg-12" droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {this.state.items.map((widget, index) => (
                        <Draggable class="col-md-4" key={widget.id} draggableId={widget.id} index={index}>
                            {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                                )}
                            >
                                {widget.content}
                            </div>
                            )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
                <Droppable class="col-lg-12" droppableId="droppable2" direction="horizontal">
                    {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {this.state.selected.map((widget, index) => (
                        <Draggable class="col-md-4" key={widget.id} draggableId={widget.id} index={index}>
                            {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                                )}
                            >
                                {widget.content}
                            </div>
                            )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
  );
}
}
export default Wrapper;