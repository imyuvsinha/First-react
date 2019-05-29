import React from 'react'
import ReactDOM from 'react-dom'

function Change(props){
    if (props.value){
        return <h1> This is the first one </h1>
    }
    return <h1>This is 2nd message</h1>
}

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value : true
        
        }
    }

    handler =()=>{
        this.setState({ value: !this.state.value

        });
    }


render() {
    return (
        <div>
        <Change value={this.state.value} />
        <button onClick={this.handler}>Change the message</button>
       
        </div>
    )}
}

ReactDOM.render(
    <Btn/>,
    document.getElementById('root')
    
);