import React from 'react';
import './App.css';
import Landing from './pages/landing/indexLanding';
import { CardsProvider } from './components/context/indexContext';
import Filter from './components/filter/indexFilter';


function App() {
  return (
    <React.Fragment>
      <CardsProvider>
       
        <Landing></Landing>
      </CardsProvider>
    </React.Fragment>
  )
}

export default App;
