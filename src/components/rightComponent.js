import React from 'react';

const RightComponent = ({
  currencies,
  sourceCurrency,
  targetCurrency,
  amount,
  handleConvert,
  setSourceCurrency,
  setTargetCurrency,
  setAmount
}) => {
  return (
    <div className="right-component">
      <h2>Right Component</h2>
      <div>
        <label>Source Currency:</label>
        <select value={sourceCurrency} onChange={(e) => setSourceCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Target Currency:</label>
        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default RightComponent;
