import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
  return (
    //BEM - Block Element Modifier
    <div className="App">
      {/* <h1>Hello clever programer, lets build the Amazon clone app ): </h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
