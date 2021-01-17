import React, { Component } from 'react';
import { Tab, TabBarItem } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css';
import iconSrc from '../../logo.svg';

export default class Tabbar extends Component {
    handleHashIndex(e) {
        switch (e) {
            case 0:
                window.location.hash = '/';
                break;
            case 1:
                window.location.hash = '/utilsBox';
                break;
            case 2:
                window.location.hash = '/Login';
                break;
            default:
                window.location.hash = '/404';
                break;
        }
    }
    render() {
        return (
            <div className="tab_wrapper">
                <Tab type="tabbar" onChange={this.handleHashIndex}>
                    <TabBarItem icon={<img src={iconSrc} alt="icon" />} label="服务大厅">
                    </TabBarItem>
                    <TabBarItem icon={<img src={iconSrc} alt="icon" />} label="实用工具">
                    </TabBarItem>
                    <TabBarItem icon={<img src={iconSrc} alt="icon" />} label="我">
                    </TabBarItem>
                </Tab>
            </div>
        )
    }
}