import React, { Component } from 'react';
import './index.css';
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        let appTitle = typeof(this.props.appTitle) !== 'undefined' ? this.props.appTitle : '智慧长征 • 校园服务大厅';
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" onClick={()=>{window.location.hash='/'}} />
                    <h2>{appTitle}</h2>
                </div>
            </div>
        )
    }
}

export default Header;