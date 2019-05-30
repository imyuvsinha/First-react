import React from 'react'
import ReactDOM from 'react-dom'
import Theme from './theme'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';


 

class Calculate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            scale:'c',
            temp : 0
    }
    }

    
    handleCelsius=(e)=>{

        this.setState({
            scale:'c',
            temp : e.target.value
            
        })
        console.log("abcd");
    }
    handleFahren=(e)=>{
        this.setState({
            scale:'f',
            temp: e.target.value
        })
    }
    render(){
        const  temp  = this.state.temp;
        const scale  = this.state.scale;
        const cels = scale === 'f'? (temp-32)* 5/9 : temp;
        const farh = scale === 'c'? (temp*9/5) + 32 : temp;
        return (
            
            <Theme>
                    <AppBar title="My Calculator" />
      
                  <br></br>
                <fieldset>
                    <legend>Scale Celsius</legend>
                    <input value={cels} onChange={this.handleCelsius}/>
                </fieldset>

                <fieldset>
                    <legend>Scale Fahrenheit</legend>
                    <input value={farh} onChange={this.handleFahren}/>
                </fieldset>
               
      <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
  
            </Theme>
        )
    }
}

    
  

ReactDOM.render(<Calculate/>, document.getElementById('root'));