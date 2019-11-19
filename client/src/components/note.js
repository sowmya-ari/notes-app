import React from "react";
import { CompactPicker } from "react-color";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      changedTitle: "",
      changedContent: "",
      displayColorPicker: false,
      color: {
        r: "",
        g: "",
        b: "",
        a: "1"
      }
    };
  }
  DeleteNote() {
    var id = this.props.id;
    fetch("/notes/" + id, {
      method: "DELETE"
    });
  }
  componentDidMount() {
    this.setState({
      changedTitle: this.props.title,
      changedContent: this.props.content
    });
  }
  handleEditing() {
    this.setState({
      editing: true,
      changedTitle: this.props.title,
      changedContent: this.props.content
    });
  }
  handleEditingDone(event) {
    var id = this.props.id;
    if (event.keyCode === 13) {
      this.setState({
        editing: false
      });
      fetch("/notes/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.state.changedTitle
        })
      });
      fetch("/notes/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: this.state.changedContent
        })
      });
    }
  }
  handleTitleonChange(event) {
    var _changedTitle = event.target.value;
    this.setState({ changedTitle: _changedTitle });
  }
  handleContentonChange(event) {
    var _changedContent = event.target.value;
    this.setState({ changedContent: _changedContent });
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChange = color => {
    this.setState({ color: color.rgb });
  };
  render() {
    var view = {};
    var edit = {};
    if (this.state.editing === true) {
      view.display = "none";
    } else {
      edit.display = "none";
    }
    var title = this.props.title;
    var content = this.props.content;
    const popover = {
      position: "relative",
      zIndex: "2"
    };
    const cover = {
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };
    const color = {
      background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
    };
    return (
      <div>
        <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
          <h5 className="card-header" style={view}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.DeleteNote.bind(this)}>Delete
            </button>
            <button
              type="button"
              id="color-picker-2"
              className="btn btn-secondary btn-sm"
              onClick={this.handleClick}>Color
            </button>
            {this.state.displayColorPicker ? (<div style={popover}><div style={cover} onClick={this.handleClose} />
            <CompactPicker color={this.state.color} onChange={this.handleChange}/></div>) : null}
          </h5>
          <div className="card-body text-dark" onClick={this.handleEditing.bind(this)} style={{ ...view, ...color }}>
            <h1 className="card-title">{title}</h1>
            <p className="card-text ">{content}</p>
          </div>
        </div>
        <div style={edit} className="editing">
          <textarea
            type="text"
            value={this.state.changedTitle}
            onChange={this.handleTitleonChange.bind(this)}
            onKeyDown={this.handleEditingDone.bind(this)}
          />
          <textarea
            type="text"
            value={this.state.changedContent}
            onChange={this.handleContentonChange.bind(this)}
            onKeyDown={this.handleEditingDone.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default Note;
