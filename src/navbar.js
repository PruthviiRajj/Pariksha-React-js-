import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white" to="/"><b>Pariksha</b></Link>                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>                            
                        </div>                        
                    </div>
                    <h1 class="nav-link active text-white" style={{float:"right"}}><sub>by</sub>Pruthviraj</h1>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;