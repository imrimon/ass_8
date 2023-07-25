import React, { useState } from 'react';

const ExpensePage = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the data to the state array
    const newExpense = {
      expenseName,
      amount,
    };
    expenses.push(newExpense);

    // Reset the form
    setExpenseName('');
    setAmount(0);
 
  };

  const totalExpenses = expenses.reduce((total, expense) => total + Number(expense.amount), 0);

  return (
    <div>
      <div className="container">
        <div className="home-head">
          <h2>Add Expense Transactions</h2>
        </div>

        <div className="d-grid">
          <div className="form-wrap">
            <form action="" className='bg-2' onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Expense Name</label>
                <input type="text" placeholder='Enter Income Name' value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
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
          <div className="box-list exp-list">
            <h5>Expense List</h5>
            <ul className='bg-2'>
              {expenses.map((expense, index) => (
                <li key={index}>
                  1. {expense.expenseName} <span>Amount: {expense.amount}</span>
                </li>
              ))}
            </ul>
            <h4>Total Expense: <span className='red'>{totalExpenses}</span> Tk</h4>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ExpensePage;
