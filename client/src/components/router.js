import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signupform from "./signupForm";
import Signinform from "./signinForm";
import AllNotes from "./notes";
import { createHashHistory } from 'history'
import '../styles/router.css';
class Customrouter extends React.Component {
  handleClick =(event)=>{
    const history = createHashHistory()
    localStorage.clear()
    return history.push('/')
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="links">
            <Link to={"/notes"} className="nav-link">
              Notes
            </Link>{" "}  
            {!localStorage.getItem("username") && <Link to={"/signup"} className="nav-link">Sign Up
            </Link>}
            {!localStorage.getItem("username") &&   <Link to={"/"} className="nav-link">
              Sign In
            </Link>}
            {localStorage.getItem("username") && <button onClick={this.handleClick}>Log Out</button> }
          </div   >
          <hr />
          <Switch>
            <Route path="/notes" component={AllNotes} />
            <Route path="/signup" exact component={Signupform} />
            <Route path="/" component={Signinform} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Customrouter;
