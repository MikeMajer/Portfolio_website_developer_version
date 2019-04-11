import React from 'react';
import "../styles/Experience.css";
import sliderImg from "../images/slider.jpg";
import sliderImg1 from "../images/slider1.jpg";
import sliderImg2 from "../images/slider2.jpg";

class Experience extends React.Component {
  state = {
    index: 0,

  }

  images = [sliderImg, sliderImg1, sliderImg2, sliderImg, sliderImg1];
  title = ["Robots", "Vision systems", "PLC", "CNC", "Soft skills"];
  content = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, quo modi debitis nobis quaerat deleniti fuga, atque repellat eius quia sapiente rem qui? Provident ratione nihil exercitationem aliquam sunt consectetur.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla similique quos dolorum. Similique, laborum in ut quasi reprehenderit debitis necessitatibus quis! Perferendis provident maiores dicta iusto aspernatur. Minus, officiis nihil.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla similique quos dolorum. Similique, laborum in ut quasi reprehenderit debitis necessitatibus quis! Perferendis provident maiores dicta iusto aspernatur. Minus, officiis nihil.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla similique quos dolorum. Similique, laborum in ut quasi reprehenderit debitis necessitatibus quis! Perferendis provident maiores dicta iusto aspernatur. Minus, officiis nihil.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit rerum ex numquam earum similique laborum illum aspernatur officiis optio non, cumque maxime a ab quisquam natus ratione atque quam. Dignissimos."];
  activeDot = "activeDot";


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
  }

  render() {

    const { index } = this.state;
    const { images, title, content } = this;
    console.log(index);
    console.log(this.activeDot);
    return (
      < div className="resume" >
        <h1>My programming background</h1>
        <header className="slider">
          <img src={images[index]} alt="" />
          <h2>{title[index]}</h2>
          <p>{content[index]}</p>
          <div className="dots">
            <span className={index === 0 ? this.activeDot : ""}></span>
            <span className={index === 1 ? this.activeDot : ""}></span>
            <span className={index === 2 ? this.activeDot : ""}></span>
            <span className={index === 3 ? this.activeDot : ""}></span>
            <span className={index === 4 ? this.activeDot : ""}></span>
          </div>
          <button id="left" onClick={this.handleClick}><i id="left" className="fas fa-arrow-left"></i></button>
          <button id="right" onClick={this.handleClick}><i id="right" className="fas fa-arrow-right"></i></button>
        </header>
      </div >
    );
  }
}
export default Experience;
