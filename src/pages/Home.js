import React from 'react';
import { Link  } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="home-head">
                    <h1>Welcome to Income &amp; Expense Tracker</h1> 
                    
                    <Link to="/income">Income</Link >
                    <Link to="/expense">Expense</Link >
                </div> 
            </div>
        </div>
    );
};

export default Home;
