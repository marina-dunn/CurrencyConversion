import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const { useState } = React;
  const [value, setValue] = useState("");
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  return (
    <div className="App">
      <span className="header-left">
        <header className="App-header">
          Currency Converter
        </header>
      </span>
      <span className="header-right">
        <div className="input-holder horizontal-form">
          <div className="countries">
            <label htmlFor="srcCountry">Source Country</label>
            <select value={value} /*onChange={onChange}*/ name="srcCountry">
              {/* get each option to be a country */}
              <option value="cupid">Cupid</option>
            </select>
            <label htmlFor="destCountry">Destination Country</label>
            <select value={value} /*onChange={onChange}*/ name="destCountry">
              {/* get each option to be a country */}
            </select>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" name="amount"></input>
          </div>
          <div className="conversion-results">
            <span id="conversion-factor">{useState}</span>
            <span id="conversion-result">{useState}</span>
          </div>
        </div>
      </span>
    </div>
  );
}

export default App;
