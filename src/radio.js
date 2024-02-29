import React, { Component } from 'react';
import './style.css';

class Radio extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <input checked={this.props.checked} onChange={()=>this.props.handleCLick(this.props.index,this.props.name)} type='radio' name='x'/> {this.props.name}
            </div>            
        );
    }
}
 
export default Radio;