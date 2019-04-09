import React from 'react';
import "../styles/About.css";
import img from "../images/img.png";

class About extends React.Component {
    state = {
        txt: "My name is Michal Majer and I am  programming enthusiastic, I am very keen on front-end, moreover, I am exploring the secrets of back-end either. I love new technologies, creative and challenging projects as well as problem-solving. I am looking forward to improving efficiency in a forward thinking company, by applying my skills and engagement as a junior Front-end developer.",
        indexText: -30,
        text: "",
    }

    indexTyping = "";

    setTyping = () => {
        this.indexTyping = setInterval(() => this.typingEffect(), 50)
    }

    typingEffect = () => {

        if (this.state.indexText >= 0) {
            this.setState({

                text: this.state.text + this.state.txt[this.state.indexText],

            })
        }
        this.setState({
            indexText: this.state.indexText + 1
        })

        if (this.state.indexText === this.state.txt.length) {
            clearInterval(this.indexTyping)
        }

    }

    componentWillMount() {
        this.setTyping()
    }


    render() {

        return (
            <>
                <div className="about">
                    <div className="text" ><h1>Here is a little about me ...</h1>{this.state.text}</div>
                    <img src={img} alt="portfolio picture" />
                </div>
            </>
        );
    }
}
export default About;