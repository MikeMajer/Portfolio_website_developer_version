import React from 'react';
import '../styles/Navigation.css'

class Navigation extends React.Component {

    state = {
        value: "burger",
        click: 1,
    };

    handleClick = () => {

        if (this.state.click === 1) {
            this.setState({
                value: "burger active",
                click: 2
            })
        }
        if (this.state.click === 2) {
            this.setState({
                value: "burger close",
                click: 1
            })
        }
    }
    render() {
        return (
            <div onClick={this.handleClick} className={this.state.value} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}
export default Navigation;
