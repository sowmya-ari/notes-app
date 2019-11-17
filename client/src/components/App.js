import React from 'react';
import '../styles/App.css';
import CustomRouter from "./router";
function App() {
  return (
    <div className="App">
      <h1 className="heading">Notes</h1>
      <CustomRouter/>
    </div>
  );
}
export default App;
