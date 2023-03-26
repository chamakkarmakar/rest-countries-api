import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './Components/Countries';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import CountryInfo from './Components/CountryInfo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Countries />}></Route>
        <Route path='/countries' element={<Countries />}></Route>
        <Route path='/countries/:name' element={<CountryInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
