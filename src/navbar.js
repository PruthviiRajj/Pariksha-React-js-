import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{display:'flex',alignItems:'center',gap:14}}>
                    <Link className="navbar-brand" to="/">Pariksha</Link>
                    <div style={{display:'flex',alignItems:'center',gap:8}}>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                    </div>
                </div>

                <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <div style={{display:'flex',alignItems:'center',background:'rgba(255,255,255,0.02)',padding:'6px 10px',borderRadius:10}}>
                        <FaSearch style={{color:'var(--muted)',marginRight:8}} />
                        <input placeholder="Search tests" style={{background:'transparent',border:'none',outline:'none',color:'inherit'}} />
                    </div>
                    <button className="btn-ghost" onClick={toggleTheme} aria-label="Toggle theme">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    <span className="nav-author">by Pruthviraj</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;