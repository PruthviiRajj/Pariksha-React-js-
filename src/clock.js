import React, { Component } from 'react';
import withRouter from './withrouter';
import './style.css';

class Clock extends Component {
    state = { 
        counter : this.props.sec
     } 

    componentDidMount(){
        let x = setInterval(() => {
            if(this.state.counter > 0){
                this.setState({counter:this.state.counter-1});
            }else{
                clearInterval(x);
                this.props.onTimecomplete();                
            }
            
        }, 1000);
    }
    render() { 
        return (
            <h1>{Math.floor(this.state.counter/60)} mins {this.state.counter%60} secs</h1>            
        );
    }
}
 
export default withRouter(Clock);