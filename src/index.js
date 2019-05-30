import React from 'react'
import ReactDOM from 'react-dom'

class X extends React.Component {
    componentWillMount() {
        console.time('willmount')
        navigator.geolocation.getCurrentPosition(pos => console.log(pos));
        console.timeEnd('willmount')
    }
    render() {
        return <div>'Hello'</div>;
    }
}

ReactDOM.render(<X/>, document.getElementById('root'));