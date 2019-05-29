import React from 'react'
import ReactDOM from 'react-dom'

class Increment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0
        }
    }
    incre =(e)=>{
        e.preventDefault();
        this.setState ({
            counter : this.state.counter + 1
        });
        }

    render(){
        return <a href="https://www.google.com" onClick={this.incre}>Value is {this.state.counter}</a>
    }
    
}
ReactDOM.render(
    <Increment/>,
    document.getElementById('root')
);