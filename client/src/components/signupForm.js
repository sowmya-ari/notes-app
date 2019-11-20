import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../styles/signupform.css";


class Signupform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      result: {}
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    this.setState({result: {}})
    axios
      .post("/signup", data)
      .then(res => {
        if(res.data.exist===true){
          this.setState({ result: res.data });
        }
        else{
        this.setState({ result: res.data });
        }
      })
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: "",
      password2: "",
    });
  };
  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  HandleChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handlechange = event => {
    this.setState({
      password2: event.target.value
    });
  };

  render() {
    return (
      <div className="SignUp">
        <div>
          {!this.state.result.result && <h2>{this.state.result.message}</h2>}
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              placeholder="Enter username"
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.HandleChange}
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              placeholder="Confirm password"
              value={this.state.password2}
              onChange={this.handlechange}
              type="password"
            />
          </Form.Group>
          <Button block type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}
export default Signupform;
