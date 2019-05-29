import React from 'react'
import ReactDOM from 'react-dom'
const name = ['abc','def','geh','abc']
const car= name.map((name) => <li>{name}</li>)

ReactDOM.render(
    <ul>{car}</ul>,
    document.getElementById('root')
    
);