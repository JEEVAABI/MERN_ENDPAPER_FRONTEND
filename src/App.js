import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RightComponent from './components/rightComponent';
import LeftComponent from './components/leftComponent';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  //const [currencyOptions, setCurrencyOptions] = useState([]);

useEffect(() => {
  axios
    .get('http://localhost:3500/api/currencies')
    .then((response) => {
      const data = response.data;
      setCurrencies(data);
      setSourceCurrency(data[0]);
      setTargetCurrency(data[0]);
      
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

// const currencyOptions = currencies.map((currency) => (
//   <option key={currency} value={currency}>
//     {currency}
//   </option>
// ));


  const handleConvert = () => {
    axios
      .post('http://localhost:3500/api/convert', { sourceCurrency, targetCurrency, amount })
      .then((response) => {
        setConvertedAmount(response.data.convertedAmount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="right-component">
        <RightComponent
          currencies={currencies}
          sourceCurrency={sourceCurrency}
          targetCurrency={targetCurrency}
          amount={amount}
          handleConvert={handleConvert}
          // currencyOptions={CurrencyOptions}
          setSourceCurrency={setSourceCurrency}
          setTargetCurrency={setTargetCurrency}
          setAmount={setAmount}
        />
      </div>
      <div className="left-component">
        <LeftComponent convertedAmount={convertedAmount} />
      </div>
    </div>
  );
}

export default App;
