import React from 'react';

import './App.css';

import Header from './components/Header';
import { fetchRates } from './utils/api';

const App = () => {
  const handleSubmit = async () => {
    try {
      const rates = await fetchRates('AUD');
      console.log(rates);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="app">
      <div className="app__content">
        <Header />
        {/* TODO: add input, output, error message etc */}
        <button onClick={handleSubmit}>get rates</button>
      </div>
    </div>
  );
};

export default App;
