import React from 'react';
import '../styles/App.css';
import CustomRouter from "./router";
import Links from "./links"
import {BrowserRouter} from "react-router-dom";
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1 className="heading">Notes</h1>
      <BrowserRouter>
       <Links/>
       <CustomRouter/>
      </BrowserRouter>
    </div>
  );
  }
}
export default App;
