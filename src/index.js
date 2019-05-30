import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
 

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
            
            <div>
                 <Main /> <br></br>
                <fieldset>
                    <legend>Scale Celsius</legend>
                    <input value={cels} onChange={this.handleCelsius}/>
                </fieldset>

                <fieldset>
                    <legend>Scale Fahrenheit</legend>
                    <input value={farh} onChange={this.handleFahren}/>
                </fieldset>
               
            </div>
        )
    }
}

const Main = () => (
    <MuiThemeProvider>
      <AppBar title="My Calculator" />
    </MuiThemeProvider>
  );
  

ReactDOM.render(<Calculate/>, document.getElementById('root'));