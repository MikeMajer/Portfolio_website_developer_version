import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';


class Navigation extends React.Component {

  state = {
    value: "burger",
    aside: "",
    click: 1
  }

  handleClick = () => {
    if (this.state.click === 1) {
      this.setState({
        value: "burger active",
        aside: "on",
        click: 2
      });
    } else if (this.state.click === 2) {
      this.setState({
        value: "burger close",
        aside: "",
        click: 1
      });
    }
  }


  render() {

    const { value, aside } = this.state;

    const list = [
      { name: "home", path: "/", exact: true },
      { name: "about", path: "/about" },
      { name: "tools", path: "/tools" },
      { name: "experience", path: "/experience" },
      { name: "contact", path: "/contact" },
    ]

    const menu = list.map(item => (
      <li key={item.name}>
        <NavLink onClick={this.handleClick} to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        <div className="cover"></div>
      </li>
    ));

    return (
      <>
        <div onClick={this.handleClick} className={value} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <aside id="one" className={aside}></aside>
        <aside id="two" className={aside}></aside>
        <aside id="tree" className={aside}></aside>
        <aside id="four" className={aside}>
          <nav>
            <ul>
              {menu}
            </ul>
          </nav>
        </aside>
      </>
    );
  }
}

export default Navigation;