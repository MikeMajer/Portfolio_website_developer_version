import React from 'react';
import "../styles/Contact.css";
import { Prompt } from 'react-router-dom';

class Contact extends React.Component {
  state = {
    value: "",
    name: "",
    email: "",
    subject: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert("Sorry for any inconvenience, the form is under construction at the moment. Please contact me on majer.michal@outlook.com or through my LinkedIn profile page.")
    this.setState({
      value: "",
      name: "",
      email: "",
      subject: ""
    })
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="contact">
        <h1>Contact me here ...</h1>
        <form className="formStyle" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="Name ..." name="name" value={this.state.name} autoComplete="off" />
          <input onChange={this.handleChange} type="email" placeholder="Email ..." name="email" value={this.state.email} autoComplete="off" />
          <input onChange={this.handleChange} type="text" placeholder="Subject ..." name="subject" value={this.state.subject} autoComplete="off" />
          <textarea
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type message ..."
          >
          </textarea>
          <button>Submit</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Your form is not submitted. Are you sure that you want to leave this page?"
        />
      </div>
    );
  }
}
export default Contact;