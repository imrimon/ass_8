import './styles.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/income' element={<IncomePage />} />
        <Route path='/expense' element={<ExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
