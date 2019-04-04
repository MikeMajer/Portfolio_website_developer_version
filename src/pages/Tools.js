import React from 'react';
import "../styles/Tools.css"

const Tools = () => {
  return (
    <>
      <div className="title"><h1>Tools and technologies I am using</h1></div>

      <div className="icons">
        <span><i class="fab fa-html5"></i>HTML 5</span>
        <span><i class="fab fa-css3-alt"></i> CSS 3</span>
        <span><i class="fab fa-js"></i>JavaScript</span>
        <span><i class="fab fa-react"></i>React.js</span>
        <span><i class="fab fa-node"></i>Node.js</span>
        <span><i class="fab fa-github"></i>Git & GitHub</span>
      </div>
    </>
  );
}

export default Tools;