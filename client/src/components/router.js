import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signupform from "./signupForm";
import Signinform from "./signinForm";
import AllNotes from "./notes";

class Customrouter extends React.Component {
    render() {
      return (
      <BrowserRouter>
          <div>
           <nav>
              <Link to={'/'} className="nav-link"> Home </Link>{' '}
              <Link to={'/signup'} className="nav-link">Sign Up</Link>{' '}
              <Link to={'/signin'} className="nav-link">Sign In</Link>{' '}
            </nav>
            <hr />
            <Switch>
                <Route path="/" exact component={AllNotes}/>
                <Route path='/signup' component={Signupform} />
                <Route path='/signin' component={Signinform} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
export default Customrouter;  