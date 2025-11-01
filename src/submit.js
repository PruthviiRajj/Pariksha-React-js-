import React, { useEffect } from 'react';
import withRouter from './withrouter';
import { useLocation } from 'react-router-dom';
import "./marks.css";
import toast from 'react-hot-toast';

function Submit(props) {
    const location = useLocation();
    const marks = location?.state?.marks ?? 0;

    useEffect(() => {
        toast.success(`You scored ${marks} points`);
    }, [marks]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>Obtained marks</h1>
                            <p style={{ fontSize: 48 }}>{marks}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Submit);
