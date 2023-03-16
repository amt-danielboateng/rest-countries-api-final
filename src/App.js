import Header from './Header';
import './App.css';
import Country from './Country';

function App() {
  return (
    <div className="app">
      <Header />
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
    </div>
  );
}

export default App;
