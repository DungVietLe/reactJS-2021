import React, { Component } from 'react';
class img extends Component {
    render(){
        return(
            <div className="img">
                <img>{this.props.src}</img>
            </div>
        )
    }
}
export default img