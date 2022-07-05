import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
 
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(res => {
         setCoins(res.data);
      })
    }); 

  
  
  
  
  
  
  
  return (
    <div className="App">
      <h1> API</h1>
    </div>
  );
}

export default App;
