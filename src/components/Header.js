import React from 'react';
import { NavLink  } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-area">
      <div className='inner-cont'>
        <h5>IE Tracker</h5>
        <nav>
          <ul>
            <li>
              <NavLink  to="/">Home</NavLink >
            </li>
            <li>
              <NavLink  to="/income">Income</NavLink >
            </li>
            <li>
              <NavLink  to="/expense">Expense</NavLink >
            </li>
          </ul>
        </nav>
      </div> 
    </div>
  );
};

export default Header;
