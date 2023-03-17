import { useState } from 'react';
import Header from './Header';
import './App.css';
import Country from './Country';
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
const [darkMode, setDarkMode] = useState(false);

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
<input type="text" placeholder='search for a country...' />
          </div>
          <div className={`select-region ${darkMode ? 'darkMode': ""}`}>
<select>
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
        <Country darkMode={darkMode}/>
        </div>
      </div>
  }/>
<Route path='country-details' element={<CountryDetails darkMode={darkMode}/>}/>
</Routes>

      
    </div>
  );
}

export default App;
