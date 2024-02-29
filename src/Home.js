import React, { Component } from 'react';
import Card from './Card';
import './style.css';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <h1 style={{fontSize:50}}>Available test</h1> <br></br>                   
                    <h1>Correct = 3 marks</h1>
                    <h1>wrong = -0.5</h1>
                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <Card name='general knoweledge' id='9'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='sports' id='21'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Computer' id='18'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Film' id='11'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Music' id='12'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Video Games' id='15'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Science&Nature' id='17'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Vehicles' id='28'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Celebrities' id='26'/> 
                    </div>
                    <div className='col-4'>
                        <Card name='Anime&Manga' id='31'/> 
                    </div>
                </div>      
            </div>
        );
    }
}
 
export default Home;