import React, { Component } from 'react';
import { Grids, Panel, PanelHeader, PanelBody, PanelFooter, MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Header from '../../Layout/Header';
import Tabbar from '../../Layout/Tabbar';
import iconSrc from '../../logo.svg';

class Dashboard extends Component {
    componentWillMount() {
        let currentTime = new Date();
        let hourTime = currentTime.getHours();
        let tipText = '';
        if (hourTime >= 5 && hourTime <= 11) {
            tipText = '早上好鸭(0^◇^0)一日之计在于晨，又是美好的一天~';
        } else if (hourTime >= 12 && hourTime <= 13) {
            tipText = '午餐时间，吃饱喝好，下午才有精气神！';
        } else if (hourTime >= 14 && hourTime <= 17) {
            tipText = '下午好~ 只有奋斗的人生才称得上幸福的人生！';
        } else if (hourTime >= 18 && hourTime <= 24) {
            tipText = '晚上好，又是忙碌的一天~';
        } else if (hourTime >= 0 && hourTime < 5) {
            tipText = '夜深了，别熬夜哦宝贝。早点睡，晚安~';
        } else {
            tipText = '欢迎回来（问候语系统暂时无法识别您的时区）';
        }
        this.setState({
            gridList: [{
                icon: <img src={iconSrc} alt="icon" />,
                label: '课表查询',
                href: '#/classTable'
            }, {
                icon: <img src={iconSrc} alt="icon" />,
                label: '成绩查询',
                href: '#/scoreQuery'
            }, {
                icon: <img src={iconSrc} alt="icon" />,
                label: 'GPA计算器',
                href: '#/gpaCalculator'
            }],
            headerTip: tipText
        });
    }
    render() {
        return (
            <div>
                <Header />
                <Panel>
                    <PanelHeader>
                        {this.state.headerTip}
                    </PanelHeader>
                    <PanelBody>
                        <MediaBox type="appmsg" href="#/">
                            <MediaBoxHeader><img src={iconSrc} alt="icon" /></MediaBoxHeader>
                            <MediaBoxBody>
                                <MediaBoxTitle>杭州 晴 9℃~19℃</MediaBoxTitle>
                                <MediaBoxDescription>
                                    系统正在封测开发阶段，此区域作用待定。
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                    </PanelBody>
                    <PanelFooter href="#/">
                    </PanelFooter>
                </Panel>
                <Grids data={this.state.gridList} />
                <Tabbar />
            </div>
        )
    }
}

export default Dashboard;