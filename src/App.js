import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <div className='inputs'>
          <div className='search-input'>
<input type="text" placeholder='search for a country...' />
          </div>
          <div className='select-region'>
<select>
  <option>All</option>
  <option>All</option>
  <option>All</option>
  <option>All</option>
  <option>All</option>
  <option>All</option>
</select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
