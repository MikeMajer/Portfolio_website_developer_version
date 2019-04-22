import React from 'react';
import "../styles/Experience.css";
import sliderImg from "../images/robot.jpg";
import sliderImg1 from "../images/Vision.jpg";
import sliderImg2 from "../images/PLC.jpg";
import sliderImg3 from "../images/CNC2.jpg";
import sliderImg4 from "../images/meeting.jpg";
import sliderImg5 from "../images/Team.jpg";

class Experience extends React.Component {

  state = {
    index: 0,

  }

  images = [sliderImg, sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5];


  title = ["Robots", "Vision systems", "PLC", "CNC", "Soft skills", "Front-End Developing"];


  content = [

    "First time I discovered programming in 2012 when I started my work in the automotive industry in international company called Dr Schneider. I occupated maintenance technician position, and one of my responsibilities was to correct, and ad new lines of code to robots move. The language I used calls Rapid for ABB robots. However, I have some experience with robots like KUKA and MOTOMAN as well. In this time I did some robot programming training which contains basic and advances aspects of this type of programming.",

    "The same profession enabled me to learn something about the visions systems like (Keyence, Balluff or Cognex), which we used to detect different parts of products. In this case, I have used simple conditional statements. It was an excellent opportunity to see how graphics and code can work together.",

    "My next big employer called WABCO,  and here I had the possibility to try program controllers (PLC) such as Siemens or Beckhoff. I was using a ladder diagram or a function block diagram.",

    "Another programming experience I was lucky to have, was about CNC machine programming. During six months I worked as a CNC programmer/fitter, in one of Australian company OZ Seals. In this occupation, I was using G-code to set up correct directions of the machine.",

    "All of my occupations was highly focused on problem-solving, work with time pressure as well as a team-work. I gained a lot of essential skills which can be very useful in a programming environment.",

    "Finally, in October 2018, I came across my first Front-end developing course, and I decide to engage myself full time on it. From this point, I went through a bunch of courses about programming topic include: HTML / HTML Canvas, CSS (SASS/LESS), JavaScript, Jquery, React.js, Node.js, Git & GitHub. Right Now I am focused on grinding my programming skills and working on my projects, which you can check on my GitHub and Code Pen pages."

  ];

  activeDot = "activeDot";

  sliderTime = 20000;

  indexInterval = "";


  componentWillMount() {
    this.indexInterval = setInterval(this.autoSlide, this.sliderTime);
  }


  autoSlide = () => {

    const { index } = this.state;

    this.setState({
      index: index + 1,
    })

    if (index === this.title.length - 1) {
      this.setState({
        index: 0,
      })
    }
  }


  handleClick = (e) => {


    const { index } = this.state;
    const { title } = this;

    if (e.target.id === "right") {
      this.setState({
        index: index + 1,
      })
      if (index === title.length - 1) {
        this.setState({
          index: 0,
        })
      }
    }

    if (e.target.id === "left") {
      if (index <= 0) {
        this.setState({
          index: title.length - 1,
        })
      } else {
        this.setState({
          index: index - 1,
        })
      }
    }

    clearInterval(this.indexInterval);
    this.indexInterval = setInterval(this.autoSlide, this.sliderTime);
  }



  render() {

    const { index } = this.state;
    const { images, title, content } = this;

    return (
      < div className="resume" >
        <h1>My programming <span>background</span> </h1>
        <header className="slider" >
          <div className="backImg" style={{ backgroundImage: `url(${images[index]})` }}></div>
          <h2>{title[index]}</h2>
          <p>{content[index]}</p>
          <div className="dots">
            <span className={index === 0 ? this.activeDot : ""}></span>
            <span className={index === 1 ? this.activeDot : ""}></span>
            <span className={index === 2 ? this.activeDot : ""}></span>
            <span className={index === 3 ? this.activeDot : ""}></span>
            <span className={index === 4 ? this.activeDot : ""}></span>
            <span className={index === 5 ? this.activeDot : ""}></span>
          </div>
          <button id="left" onClick={this.handleClick}><i id="left" className="fas fa-arrow-left"></i></button>
          <button id="right" onClick={this.handleClick}><i id="right" className="fas fa-arrow-right"></i></button>
        </header>
      </div >
    );
  }
}


export default Experience;
