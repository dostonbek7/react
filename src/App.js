import { useState } from 'react';
import './App.css';


const App = () => {
  const [countries, setCountries] =useState([
  {
    id: 1,
    img: './images/Uzbekistan.png',
    name: "O'zbekiston",
    capital : "Toshkent",
    population: '36 millon',
    area: '448.500 km2',
    courrency: "so'm"
  },
  {
    id: 2,
    img:'./images/Kazakhstan.png',
    name: "Qozog'iston",
    capital : "Ostona",
    population: '18 millon',
    area: '1.448.432 km2',
    courrency: "tenge"
  },
  {
    id: 3,
    img:'./images/Kyrgyzstan.png',
    name: "Qirg'iston",
    capital : "Bishkek",
    population: '9 millon',
    area: '300.450 km2',
    courrency: "som"
  },
  {
    id: 4,
    img:'./images/Tajikistan.png',
    name: 'Tojikiston',
    capital : "Dushanbe",
    population: '5 millon',
    area: '250.850 km2',
    courrency: "somoni"
  },
  {
    id: 5,
    img:'./images/Turkmenistan.png',
    name: 'Turkmaniston',
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
            <img src={country.img} alt="Country flag" width={150} height={150}/>
            <h2>Country: {country.name}</h2>
            <h3>Capital: {country.capital}</h3>
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
