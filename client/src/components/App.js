import React from 'react';
import '../styles/App.css';
import CustomRouter from "./router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Notes App</p>
        <CustomRouter/>
      </header>
    </div>
  );
}
export default App;
