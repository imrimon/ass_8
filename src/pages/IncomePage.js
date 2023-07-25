import React, { useState } from 'react';

const IncomePage = () => {
  const [incomeName, setIncomeName] = useState('');
  const [amount, setAmount] = useState(0);
  const [incomes, setIncomes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Add the data to the state array
    const newIncome = {
      incomeName,
      amount,
    };
    incomes.push(newIncome);
  
    // Reset the form
    setIncomeName('');
    setAmount(0);
   
  };

 const totalIncome = incomes.reduce((total, income) => total + Number(income.amount), 0);
   
  

  return (
    <div>
      <div className="container">
        <div className="home-head">
          <h2>Add Income Transactions</h2>
        </div>
        <div className="d-grid">
          <div className="form-wrap">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Income Name</label>
                <input type="text" placeholder='Enter Income Name' value={incomeName} onChange={(e) => setIncomeName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="">Amount</label>
                <input type="number" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
              </div>
              <div className="form-submit">
                <button type='submit' className='btn-submit'>Add</button>
              </div>
            </form>
          </div>
          <div className="box-list">
            <h5>Income List</h5>
            <ul>
              {incomes.map((income,index) => (
                <li key={index}>{income.incomeName} <span>Amount: {income.amount}</span></li>
              ))}

            </ul>
            <h4>Total Income: <span className='grn'>{totalIncome}</span> Tk</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomePage;
