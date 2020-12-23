import React from 'react';
import axios from "axios";
import './App.css';

interface iState {
  result: string,
  fromCountry: string,
  toCountry: string,
  amount: number,
  rate: string,
  currencies: Array<string>,
  countries: Object
}

class App extends React.Component<{}, iState> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: "0",
      fromCountry: "EUR",
      toCountry: "CAD",
      amount: 1,
      currencies: [],
      countries: {},
      rate: "0"
    };
  }

  componentDidMount() {
    axios
      .get("http://data.fixer.io/api/symbols?access_key=108c9ed2d8cd9394698facdf22ac0ede")
      .then(response => {
        this.setState({ countries: response.data.symbols })
      })
      .catch(err => { console.log("Countries could not be fetched", err); });
  }

  convertHandler = () => {
    if (this.state.fromCountry !== this.state.toCountry) {
      axios
        .get(
          `http://data.fixer.io/api/latest?access_key=108c9ed2d8cd9394698facdf22ac0ede&cbase=${this.state.fromCountry}&symbols=${this.state.toCountry}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCountry];
          this.setState({ result: result.toFixed(5), rate: response.data.rates[this.state.toCountry].toFixed(5) });
        })
        .catch(error => {
          console.log("Unable to fetch the exchange rate", error.message);
        });
    } else {
      this.setState({ result: "The countries selected must be different" });
    }
  };

  selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === "srcCountry") {
      if (this.state.fromCountry !== 'EUR') {
        alert("Unfortunately, we can only convert from Euros at this point.");
        this.setState({ fromCountry: 'EUR' });
      }
      this.setState({ fromCountry: 'EUR' });
    }
    else if (event.target.name === "destCountry") {
      this.setState({ toCountry: event.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header-left box">
          <header className="App-header">
            Currency Converter
        </header>
        </div>
        <div className="header-right box">
          <div className="input-holder horizontal-form">
            <div className="countries">
              <label htmlFor="srcCountry">Source Country: </label>
              <select onChange={event => this.selectHandler(event)} name="srcCountry">
                <option key="EUR" value="EUR">
                  Euro
                </option>
                {Object.keys(this.state.countries).map((label) => (
                  <option key={label} value={label} disabled>
                    {Object.entries(this.state.countries).map(([key, value]) => { if (key === label) return value; return null; })}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <label htmlFor="destCountry">Destination Country: </label>
              <select onChange={event => this.selectHandler(event)} name="destCountry">
                {Object.keys(this.state.countries).map((label) => (
                  <option key={label} value={label}>
                    {Object.entries(this.state.countries).map(([key, value]) => { if (key === label) return value; return null; })}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <label htmlFor="amount">Amount: </label>
              <input type="text" id="amount" name="amount" value={this.state.amount} onChange={(e) => this.setState({ amount: +e.currentTarget.value })} />
              <button onClick={this.convertHandler}>Convert</button>
            </div>
            <div className="conversion-results">
              <h3>Conversion Rate: </h3>
              <span id="conversion-factor">{this.state.rate}</span>
              <br />
              <br />
              <h3>Conversion Result: </h3>
              <span id="conversion-result">{this.state.result}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
