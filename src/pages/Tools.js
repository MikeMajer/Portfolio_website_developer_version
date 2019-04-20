import React from 'react';
import "../styles/Tools.css"

const Tools = () => {


  const scrollListen = () => {
    const icons = document.querySelector(".icons");
    const arrow = document.querySelector(".scrollLabel");
    const scrollLenght = icons.scrollHeight - icons.clientHeight;

    if (icons.scrollTop === scrollLenght) {
      arrow.classList.add("scrollEnd");
    } else if (icons.scrollTop === 0) {
      arrow.classList.remove("scrollEnd");
    }

  }

  return (
    <>
      <div className="title"><h1>Tools and technologies I am using</h1></div>

      <div onScroll={scrollListen} className="icons">
        <span><i className="fab fa-html5"></i>HTML 5</span>
        <span><i className="fab fa-css3-alt"></i> CSS 3</span>
        <span><i className="fab fa-js"></i>JavaScript</span>
        <span><i className="fab fa-react"></i>React.js</span>
        <span><i className="fab fa-node"></i>Node.js</span>
        <span><i className="fab fa-github"></i>Git &amp; GitHub</span>
      </div>
      <label className="scrollLabel"><i className="fas fa-angle-down"></i></label>
    </>
  );
}


export default Tools;