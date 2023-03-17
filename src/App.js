import Header from './Header';
import './App.css';
import Country from './Country';
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="app">
      <Header />

<Routes>

  <Route path='/' element={
    <div className='app-body'>
        <div className='inputs'>
          <div className='search-input'>
<input type="text" placeholder='search for a country...' />
          </div>
          <div className='select-region'>
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
        <Country />
        </div>
      </div>
  }/>
<Route path='country-details' element={<CountryDetails />}/>
</Routes>

      
    </div>
  );
}

export default App;
