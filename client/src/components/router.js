import React from "react";
import { withRouter,Route, Switch } from "react-router-dom";
import Signupform from "./signupForm";
import Signinform from "./signinForm";
import AllNotes from "./notes";
import Logout from "./logout"
import '../styles/router.css';
class Customrouter extends React.Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path="/notes" component={AllNotes} />
            <Route path="/signup" component={Signupform} />
            <Route path="/" exact component={Signinform}/>
            <Route path="/logout" component={Logout}/>
          </Switch>
        </div>
    );
  }
}
export default withRouter(Customrouter);
