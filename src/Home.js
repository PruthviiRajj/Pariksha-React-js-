import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import './style.css';

const categories = [
    { name: 'General Knowledge', id: '9' },
    { name: 'Sports', id: '21' },
    { name: 'Computer', id: '18' },
    { name: 'Film', id: '11' },
    { name: 'Music', id: '12' },
    { name: 'Video Games', id: '15' },
    { name: 'Science & Nature', id: '17' },
    { name: 'Vehicles', id: '28' },
    { name: 'Celebrities', id: '26' },
    { name: 'Anime & Manga', id: '31' },
];

const Home = () => {
    return (
        <div className="container">
            <motion.section className="hero" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>
                <div>
                    <h1>Welcome to Pariksha</h1>
                    <p className="lead">Practice tests across categories. Earn points and improve every day.</p>
                    <div className="hero-cta">
                        <button className="btn-primary-modern">Start a random test</button>
                        <button className="btn-ghost">How it works</button>
                    </div>
                </div>
                <div style={{minWidth:240,textAlign:'right'}}>
                    <img src="https://images.unsplash.com/photo-1529336953126-c8f19b0cba6a?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c9e7c25f3f0a1a9b0706c2f8c8a2d6c" alt="hero" style={{width:220,height:140,objectFit:'cover',borderRadius:10}}/>
                </div>
            </motion.section>

            <div style={{marginTop:18}}>
                <h3 style={{marginBottom:6}}>Available tests</h3>
                <p style={{color:'var(--muted)',marginTop:0}}>Correct = 3 marks | Wrong = -0.5 marks</p>

                <div className="grid">
                    {categories.map((cat) => (
                        <Card key={cat.id} name={cat.name} id={cat.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;