import React from 'react';
import "../styles/About.css";
import aboutImg from "../images/img.png";


class About extends React.Component {

  state = {
    textTemplate: "I am self-taught programming enthusiast, very keen on learning the most significant and latest technologies no matter it is a frontend or backend. I enjoy creating stylish, modern and responsive applications with sleek UX/UI connection. A versatile, self-motivated and conscientious individual with industrial automation programming background and passion for continuous improvement. ",
    indexText: -30,
    text: ""
  }

  indexTyping = "";

  typingEffect = () => {
    if (this.state.indexText >= 0) {
      this.setState({
        text: this.state.text + this.state.textTemplate[this.state.indexText]
      });
    }
    this.setState({
      indexText: this.state.indexText + 1
    });
    if (this.state.indexText === this.state.textTemplate.length) {
      clearInterval(this.indexTyping)
    }
  }

  componentDidMount() {
    this.indexTyping = setInterval(() => this.typingEffect(), 50);
  }

  render() {
    return (
      <>
        <div className="about">
          <div className="text" ><h1>Here is a little about me ...</h1>{this.state.text}</div>
          <img src={aboutImg} alt="portret" />
        </div>
      </>
    );
  }
}

export default About;