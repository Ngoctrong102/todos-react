
import React, { createRef } from 'react';
import { connect } from 'react-redux';

import taskActions from '../store/actions/tasks';

class FormInput extends React.Component{
    constructor(props){
        super(props);    
        this.inputText = createRef();
    }
    handleClick = (event)=>{
        this.props.addTask(this.inputText.current.value)
        this.inputText.current.value = ''
    }
    render(){
        return (
            <form action="#">
                <input type="text" ref={this.inputText}/>
                <button type="button" onClick={this.handleClick}>Thêm</button>
            </form>
        );
    }
}

function mapStateToProp(state){
    return {
        
    }
}

function mapDispatcherToProp(dispatch){
    return {
        addTask: (task)=> dispatch(taskActions.addTask(task))
    }
}

export default connect(mapStateToProp,mapDispatcherToProp)(FormInput);