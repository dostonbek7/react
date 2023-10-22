import { useState } from 'react';
import './App.css';
import uzb from './images/Uzbekistan.png'


const App = () => {
  const [countries, setCountries] =useState([
  {
     name: "O'zbekiston",
    capital : "Toshkent",
    population: '36 millon',
    area: '448.500 km2',
    courrency: "so'm"
  },
  {
    name: "Qozog'iston",
    capital : "Ostona",
    population: '18 millon',
    area: '1.448.432 km2',
    courrency: "tenge"
  },
  {
    name: "Qirg'iston",
    capital : "Bishkek",
    population: '9 millon',
    area: '300.450 km2',
    courrency: "som"
  },
  {
    name: 'Tojikiston',
    capital : "Dushanbe",
    population: '5 millon',
    area: '250.850 km2',
    courrency: "somoni"
  },
  {
    ame: 'Turkmaniston',
    capital : "Ashxobod",
    population: '10 millon',
    area: '550.200 km2',
    courrency: "manat"
  }
])

  return (

    <div className="App">
      {countries.map((country)=>{
        console.log(country.img);
        return(
          <div className='card'>
            <img src={uzb} alt="Country flag" width={200} height={150}/>
            <h3>Country: {country.name}</h3>
            <h4>Capital: {country.capital}</h4>
            <h4> Population: {country.population}</h4>
            <h4>Area: {country.area}</h4>
            <h4>Courrency: {country.courrency}</h4>
          </div>
        )
      })}

    </div>
  );
}

export default App;
