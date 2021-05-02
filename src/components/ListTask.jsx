
import React, { useState } from 'react';
import {connect} from 'react-redux';
import taskActions from '../store/actions/tasks';

class ListTask extends React.Component{
    constructor(props){
        super(props);   
    }
    render(){
        return (
            <ul>
                {this.props.tasks.map((task,index) => <li key={index}>
                    {task}
                    <button onClick={()=>{this.props.delTask(index)}}>X</button>
                    </li>)}
            </ul>
        );
    }
}

function mapStateToProp(state){
    return {
        tasks: state.tasks
    }
}

function mapDispatcherToProp(dispatch){
    return {
        delTask: (index)=> dispatch(taskActions.delTask(index)),
        setData: (tasks)=>dispatch(taskActions.setadadT(tasks))
    }
}

export default connect(mapStateToProp,mapDispatcherToProp)(ListTask);