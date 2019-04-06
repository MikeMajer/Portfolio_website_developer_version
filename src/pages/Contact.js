import React from 'react';
import "../styles/Contact.css";
import { Prompt } from 'react-router-dom';

class Contact extends React.Component {
    state = {
        value: "",
        isEmpty: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: "",
            isEmpty: true
        })
    }

    handleChange = (e) => {
        if (e.target.value.lenght > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        }
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h1>Contact me here...</h1>
                    <textarea
                        value={this.state.value}
                        on onChange={this.handleChange}
                        placeholder="Type message..."
                    ></textarea>
                    <button>Send</button>
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