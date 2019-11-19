import React from "react";
import { withRouter,Link} from "react-router-dom";
import '../styles/router.css';
class Links extends React.Component {
  render() {
    return (
        <div>
          <div className="links">
            {!localStorage.getItem("username") && <Link to={"/signup"} className="nav-link">Sign Up</Link>}
            {!localStorage.getItem("username") && <Link to={"/"} className="nav-link">Sign In</Link>}
            {localStorage.getItem("username")  && <Link to={"/notes"} className="nav-link">Notes</Link>}
            {localStorage.getItem("username")  && <Link to={"/logout"} className="nav-link">Log Out</Link> }
          </div>
        </div>
    );
  }
}
export default withRouter(Links);
