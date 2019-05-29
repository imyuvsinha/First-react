import React from 'react'
import ReactDOM from 'react-dom'

class Increment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter: 1 ,
            cd :2
        }
    }
    incre =(e, type)=>{
        e.preventDefault();
        this.setState ({
            counter : type === "first" ? this.state.counter * 5 : this.state.counter ,
            cd : type === "send" ? this.state.cd *3 : this.state.cd
        });
        }

    render(){ 
        return <div><a href="https://www.google.com" onClick={(e) => { this.incre(e, "first"); }}>Value is {this.state.counter}</a><hr></hr>
         <a href="https://www.google.com" onClick={(e) => { this.incre(e, "send");}}>Value is {this.state.cd}</a>
         </div>}
    
}
ReactDOM.render(
    <Increment/>,
    document.getElementById('root')
);