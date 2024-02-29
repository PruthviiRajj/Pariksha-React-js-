import React from 'react';
import Card from './Card';
import withRouter from './withrouter';
import { useLocation } from 'react-router-dom';
import "./marks.css";
// import './submit.css';

function Submit(props) {
    let location = useLocation()
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>Obtained marks</h1>
                            <p style={{fontSize:200}}>{location.state.marks}</p>
                            {console.log(location.state.marks)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Submit);
