import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let converted;
    if (currency.toLowerCase() === 'euro') {
      converted = amount * 0.011; // Assume 1 INR = 0.011 EUR
      setResult(`Converting to Euro: ${converted.toFixed(2)}€`);
    } else {
      converted = amount * 91.23; // Assume 1 EUR = 91.23 INR
      setResult(`Converting to Rupees: ₹${converted.toFixed(2)}`);
    }
    alert(result);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br/>
        <label>Currency:</label>
        <input
          type="text"
          placeholder="Euro / Rupees"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CurrencyConvertor;
