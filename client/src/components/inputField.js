import React from 'react';
class Inputfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }
    handleChange = event => {
        this.setState({ title: event.target.value });
    };
    Handlechange = event => {
        this.setState({ content: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        let data = {
            title: this.state.title,
            content: this.state.content
        };
        fetch("/notes", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        this.setState({
              title: " ",
              content: " "
        });
    }
    render() {
      return (
        <div className="Notebook">
         <form onSubmit={this.handleSubmit} className="Notes">
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
           <textarea
            name="description"
            className="notes_content"
            placeholder="Write a note"
            value={this.state.content}
            onChange={this.Handlechange}
          />
         </form>
        </div>
      )
    }
}
  
export default Inputfield;