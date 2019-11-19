import React from "react";
import Note from "./note";
import Inputfield from "./inputField";
import "../styles/note.css"

class AllNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  
  componentDidUpdate(){
    this.getAllNotes();
  }
  componentDidMount() {
    this.getAllNotes();
  }  
  componentWillMount(){
    if(!localStorage.getItem("username")){
      return this.props.history.push('/')
    }
  }
  getAllNotes = () => {
    fetch('/notes')
    .then(response => response.json())
    .then(data=>this.setState({notes:data})) 
  }
  
  render() {
    return (
    <div>  
    <Inputfield/>
    <hr/> 
    <hr/> 
    <hr/>   
    <div className="card-columns">     
      <div className="AllNotes">
        {this.state.notes.map((note) => {
        return <Note
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}/>
        })} 
      </div>
    </div>
    </div>
    );
  }
}
export default AllNotes;
