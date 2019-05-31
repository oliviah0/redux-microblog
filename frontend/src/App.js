import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App container mt-2 mb-5">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
