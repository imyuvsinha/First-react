import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class theme extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    {this.props.children}
                    </MuiThemeProvider>
            </div>
        )
    }
}
