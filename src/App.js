import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import './App.css';
import Country from './Country';
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
const [darkMode, setDarkMode] = useState(false);
const [countries, setCountries] = useState([]);
const countriesInputRef = useRef();
const regionRef = useRef();

const noCountry = countries.status || countries.message;

const fetchData = async() => {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();

  if(data.status === 404){
    setCountries([]);
    return;
  }

  setCountries(data);
}

useEffect(() => {
  try{
    fetchData()
  }catch(error){
    console.log(error);
  }
}, [])

const searchCountries = () => {
  const searchValue = countriesInputRef.current.values;

  if(searchValue.trim()){
    const fetchSearch = async() => {
      const response = await fetch(`https://restcountries.com/v2/name/${searchValue}`);
      const data = response.json();

      searchCountries(data);
    }

    try {
      fetchSearch()
    }catch(error) {
      console.log(error);
    }

  }else {
    fetchData();
  }
}

const switchMode = () => {
  setDarkMode((prevState) => !prevState);
}
  return (
    <div className={`app ${darkMode ? 'darkMode': ""}`}>
      <Header onClick={switchMode} darkMode={darkMode}/>

<Routes>

  <Route path='/' element={
    <div className='app-body'>
        <div className='inputs'>
          <div className={`search-input ${darkMode ? 'darkMode': ""}`}>
<input type="text" placeholder='search for a country...' ref={countriesInputRef} onChange={searchCountries} />
          </div>
          <div className={`select-region ${darkMode ? 'darkMode': ""}`}>
<select ref={regionRef}>
  <option>All</option>
  <option>Africa</option>
  <option>Americas</option>
  <option>Asia</option>
  <option>Europe</option>
  <option>Oceania</option>
</select>
          </div>
        </div>

        <div className='countries'>
        {!noCountry ? (countries.map((country, index) => (
          <Country 
          darkMode={darkMode}
          key={country.alpha3Code}
          code={country.alpha3Code}
          name={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
          flag={country.flag}
          />
  ))):(<p>No Country found...</p>) }
        </div>
      </div>
  }/>
<Route path='country-details' element={<CountryDetails darkMode={darkMode}/>}/>
</Routes>

      
    </div>
  );
}

export default App;
