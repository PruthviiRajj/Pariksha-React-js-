import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from './withrouter';


class Card extends Component {
    state = {  }     

    render() { 
        return (            
            <div class="card mt-3">
                <div class="card-body">                    
                    <h5 class="card-title">{this.props.name}</h5>                    
                    <p class="text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={'/test/' + this.props.id} class="btn btn-sm btn-info card-link">Take Test</Link>                    
                </div>
            </div>
        );
    }
}
 
export default withRouter(Card);

