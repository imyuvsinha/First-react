import React from 'react'
import ReactDOM from 'react-dom'

class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state={ value:'ABC'

        }
    }
    handleSubmit =(e) =>{
        console.log(this.state.value)
        e.preventDefault()
    }
    changer=(e)=>{
        console.log(e.target.value)
        this.setState({

            value : !this.state.value
        })
    }

render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <select value={this.state.value} onChange={this.changer}>
          <option value='abc'>abc</option>
          <option value='ABC'>ABC</option>
      </select>
        <input type = "submit" value="Go ahead" />
    </form>)
        }
    }
ReactDOM.render(<Forms/>, document.getElementById('root'));