
import React from 'react';

class Video extends React.Component{
    constructor(props){
        super(props);    
        this.state = {click:0};
    }
    handleClick = ()=>{
        this.setState({click: this.state.click+1})
    }
    render(){
        return (
            <div onClick={this.handleClick}>
                <img src={this.props.thumnail} alt=""/>
                <p>{this.props.title} nhấn {this.state.click} lần</p>
            </div>
        );
    }
}

export default Video;