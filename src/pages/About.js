import React from 'react';
import "../styles/About.css";
import img from "../images/img.png";

class About extends React.Component {
    state = {
        txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint tempore temporibus deserunt ipsum laudantium enim vero atque fugit quasi maiores sit nesciunt itaque provident doloremque, deleniti, facilis ex ipsa.",
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
                    <img src={img} alt="" />
                </div>
            </>
        );
    }
}
export default About;