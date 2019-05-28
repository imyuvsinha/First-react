import React from 'react'
import ReactDOM from 'react-dom'



function MyFunction(props){
    return <h1>HELLO {props.name} @ {props.at}</h1>;
}


function Show(){
    return <div>
     <MyFunction name='abc' at='Rpr'/>
    <MyFunction name='def' at='Krar'/>
    </div>
        }

ReactDOM.render(    
   < Show/>
, document.getElementById('root')    
);