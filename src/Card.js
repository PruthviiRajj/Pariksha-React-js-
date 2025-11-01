import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import withRouter from './withrouter';
import { FaBolt } from 'react-icons/fa';

const difficultyFor = (id) => {
    const n = parseInt(id, 10) || 0;
    if (n % 3 === 0) return 'Easy';
    if (n % 3 === 1) return 'Medium';
    return 'Hard';
};

const Card = ({ name, id }) => {
    const difficulty = difficultyFor(id);
    return (
        <motion.div className="card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
                <div>
                    <h5 className="card-title">{name}</h5>
                    <p className="text-secondary">A quick {difficulty.toLowerCase()} quiz to test your knowledge.</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8}}>
                    <span className="badge">{difficulty}</span>
                    <Link to={'/test/' + id} className="btn-primary-modern" style={{padding:'6px 10px',fontSize:13}}>
                        <FaBolt style={{marginRight:6}} /> Start
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default withRouter(Card);

