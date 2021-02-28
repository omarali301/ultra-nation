import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {

  const[countries, setCountries] = useState ([]);

  const [cart, setCart] = useState([]);

  useEffect(()=>{

    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data =>setCountries(data))
    .catch(error => console.log(error))
  },[])
 const addCountryClick = (country) => {
    let newCart = [...cart, country];
   
    setCart(newCart)

 }
  return (
    <div className="App">
     
        <h1>Countries loaded : {countries.length}</h1>
        <h1>Countries added : {cart.length}</h1>
        <Cart cart={cart}></Cart>
      <ul>
{
        countries.map(country => <Country country ={country} addCountryClick={addCountryClick} key={country.alpha3Code}></Country>)
}
      </ul>
    </div>
  );
}

export default App;
