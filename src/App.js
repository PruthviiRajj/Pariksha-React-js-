import React, { Component } from 'react';
import Navbar from './navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Test from './test';
import Submit from './submit';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <switch>
                    <Routes>
                        <Route path='/' Component={Home}></Route>
                        <Route path='/test/:id' Component={Test}></Route>
                        <Route path='/submit' Component={Submit}></Route>
                    </Routes>                    
                </switch>
            </div>
        );
    }
}
 
export default App;