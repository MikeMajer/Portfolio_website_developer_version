import React from 'react';
import '../styles/Navigation.css'

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
                <aside id="four" className={this.state.aside}></aside>

            </>
        );
    }
}
export default Navigation;
