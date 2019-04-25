import React from 'react';
import "../styles/About.css";
import aboutImg from "../images/img.png";


class About extends React.Component {

  state = {
    textTemplate: "My name is Michal Majer and I am  programming enthusiastic. I am very keen on front-end. Moreover, I am exploring the secrets of back-end either. I love new technologies, creative and challenging projects as well as problem-solving. I am looking forward to improving efficiency in a forward thinking company by applying my skills and engagement as a junior Front-end developer.",
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