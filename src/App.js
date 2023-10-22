import { useState } from 'react';
import './App.css';
import uzbFlag from './images/Uzbekistan.png'
import kzFlag from './images/Kazakhstan.png'
import kgFlag from './images/Kyrgyzstan.png'
import tjFlag from './images/Tajikistan.png'
import tkFlag from './images/Turkmenistan.png'


const App = () => {
  const [countries, setCountries] =useState([
  {
    id:1,
    name: "O'zbekiston",
    capital : "Toshkent",
    population: '36 millon',
    area: '448.500 km2',
    courrency: "so'm"
  },
  {
    id:2,
    name: "Qozog'iston",
    capital : "Ostona",
    population: '18 millon',
    area: '1.448.432 km2',
    courrency: "tenge"
  },
  {
    id:3,
    name: "Qirg'iston",
    capital : "Bishkek",
    population: '9 millon',
    area: '300.450 km2',
    courrency: "som"
  },
  {
    id:4,
    name: 'Tojikiston',
    capital : "Dushanbe",
    population: '5 millon',
    area: '250.850 km2',
    courrency: "somoni"
  },
  {
    id:5,
    name: 'Turkmaniston',
    capital : "Ashxobod",
    population: '10 millon',
    area: '550.200 km2',
    courrency: "manat"
  }
])

  return (

    <div className="App">
      {countries.map(country =>{
        const {id, name, capital, population, courrency, area} = country;
        return(
          <div key={id} className='card'>
            <img src={id == 1 ? uzbFlag :id == 2 ? kzFlag : id == 3 ? kgFlag : id == 4 ? tjFlag : id == 5 ? tkFlag : '' } alt="Country flag" width={200} height={150}/>
            <h3>Country: {name}</h3>
            <h4>Capital: {capital}</h4>
            <h4> Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Courrency: {courrency}</h4>
          </div>
        )
      })}

    </div>
  );
}

export default App;
