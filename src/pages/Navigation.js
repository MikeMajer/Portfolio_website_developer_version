import React from 'react';
import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    state = {
        value: "burger",
        aside: "",
        click: 1,
    };

    handleClick = () => {

        if (this.state.click === 1) {
            this.setState({
                value: "burger active",
                aside: "on",
                click: 2
            })
        }
        if (this.state.click === 2) {
            this.setState({
                value: "burger close",
                aside: "",
                click: 1
            })
        }
    }
    render() {
        const list = [
            { name: "home", path: "/", exact: true },
            { name: "about", path: "/about" },
            { name: "tools", path: "/tools" },
            { name: "experience", path: "/experience" },
            { name: "contact", path: "/contact" },
        ]


        const menu = list.map(item => (
            <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
                <div className="cover"></div>
            </li>
        ))

        return (
            <>
                <div onClick={this.handleClick} className={this.state.value} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <aside id="one" className={this.state.aside}></aside>
                <aside id="two" className={this.state.aside}></aside>
                <aside id="tree" className={this.state.aside}></aside>
                <aside id="four" className={this.state.aside}>
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
