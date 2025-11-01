import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './style.css';

const Radio = ({ index, name, checked, handleCLick }) => {
    return (
        <button
            type="button"
            onClick={() => handleCLick(index, name)}
            className={checked ? 'btn-primary-modern' : 'btn-ghost'}
            style={{width:'100%',textAlign:'left',display:'flex',alignItems:'center',justifyContent:'space-between'}}
        >
            <span>{name}</span>
            {checked && <FaCheck />}
        </button>
    );
};

export default Radio;