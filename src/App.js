import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './Components/Countries';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import CountryInfo from './Components/CountryInfo';
import { useState } from 'react';

function App() {
  const [mode, setMode]=useState('dark')
  const toggleMode = () =>{
     if(mode === 'light'){
      setMode('dark')
     } else {
      setMode('light')
     }
  }
  return (
    <div className={`${mode}`} style={{ paddingBottom: '500px' }}>
      <Header 
      mode={mode}
      toggleMode={toggleMode}
      />
      <Routes>
        <Route path='/' element={<Countries mode={mode} />}></Route>
        <Route path='/countries' element={<Countries />}></Route>
        <Route path='/countries/:name' element={<CountryInfo mode={mode} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
