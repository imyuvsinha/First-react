import React from 'react'
import ReactDOM from 'react-dom'

class Myclass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            date : new Date()
        }
    }

    componentDidMount(){
        setInterval(this.My,1000);
    }

    My =()=>{
        this.setState({
            date : new Date()
        })
    }

    render(){
        return <h1> Time is: {this.state.date.toLocaleTimeString()}</h1>
    }
}

ReactDOM.render(
    <Myclass />,
    document.getElementById('root')
);
