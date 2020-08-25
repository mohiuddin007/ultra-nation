import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountry(data);
      console.log(data)
    })
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Information of {country.length} Country</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
        {
          country.map(countries => <Country country={countries} handleAddCountry={handleAddCountry} key={countries.alpha3Code}></Country>)
        }
       
      </header>
    </div>
  );
}

export default App;
