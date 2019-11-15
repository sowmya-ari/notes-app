import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"

class Signinform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    let data = {
        username: this.state.username,
        password: this.state.password
    };
    axios
    .post("/signin",data)
    .then(res => {
    const {token} = res.data
    localStorage.setItem("jwtToken", token);
    })
    this.setState({
          username: "",
          password: ""
    });
  }
  handleChange = event => {
   this.setState({
    username: event.target.value
   });
  }
  HandleChange = event => {
    this.setState({
     password: event.target.value
    });
  }

 render() {
   return (
    <div className="Login">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicUsername">
         <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Enter username" 
            type="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword2" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter password" 
            value={this.state.password}
            onChange={this.HandleChange}
            type="password"
          />
        </Form.Group>
        <Button
          block
          type="submit"
        >Sign In</Button>
      </Form>
    </div>
  );
}
}
export default Signinform;