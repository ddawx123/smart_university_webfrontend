import React, { Component } from 'react';
import Header from '../../Layout/Header';
import nationHealthWXACode from '../../../Images/gjzwfwHealthWXACodeEntry.png';

class HealthCodeCenter extends Component {
    render() {
        return (
            <div>
                <Header appTitle="疫情防控专区" />
                <div style={{textAlign: 'center'}}>
                    <img src={ nationHealthWXACode } alt="icon" style={{width: '260px', height: '260px'}} />
                    <p>请在微信内长按扫码访问“全国防疫健康信息码”</p>
                </div>
            </div>
        );
    }
}

export default HealthCodeCenter;