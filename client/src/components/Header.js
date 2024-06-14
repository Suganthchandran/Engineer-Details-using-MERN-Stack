import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Style/Header.css';

export const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <header className='header'>
            <nav id='nav' className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={`/`} className="navbar-brand">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link active" aria-current="page">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
