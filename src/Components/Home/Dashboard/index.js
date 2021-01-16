import React, { Component } from 'react';
import { Grids, Panel, PanelHeader, PanelBody, PanelFooter, MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Header from '../../Layout/Header';
import Tabbar from '../../Layout/Tabbar';
import classTableIcon from '../../../Images/classTableIcon.svg';
import electivesIcon from '../../../Images/electivesIcon.svg';
import scoreQueryIcon from '../../../Images/scoreQueryIcon.svg';
import teachingEvaluateIcon from '../../../Images/teachingEvaluateIcon.svg';
import gpaCalculatorIcon from '../../../Images/gpaCalculatorIcon.svg';
import contactIcon from '../../../Images/contactIcon.svg';
import restaurantIcon from '../../../Images/restaurantIcon.svg';
import milkTeaIcon from '../../../Images/milkTeaIcon.svg';
import carPartnerIcon from '../../../Images/carPartnerIcon.svg';
import anonymousTalkingIcon from '../../../Images/anonymousTalkingIcon.svg';
import surveyCenterIcon from '../../../Images/surveyCenterIcon.svg';
import weatherIcon from '../../../Images/weather_sunIcon.svg';

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
                icon: <img src={classTableIcon} alt="icon" />,
                label: '课表查询',
                href: '#/classTable'
            }, {
                icon: <img src={electivesIcon} alt="icon" />,
                label: '网上选课系统',
                href: '#/onlineElectives'
            }, {
                icon: <img src={scoreQueryIcon} alt="icon" />,
                label: '成绩查询',
                href: '#/scoreQuery'
            }, {
                icon: <img src={teachingEvaluateIcon} alt="icon" />,
                label: '学生评教系统',
                href: '#/teachingEvaluate'
            }, {
                icon: <img src={gpaCalculatorIcon} alt="icon" />,
                label: 'GPA计算器',
                href: '#/gpaCalculator'
            }, {
                icon: <img src={contactIcon} alt="icon" />,
                label: '校内通讯录',
                href: '#/collegeContact'
            }, {
                icon: <img src={restaurantIcon} alt="icon" />,
                label: '淦饭小助手',
                href: '#/restaurantAssistant'
            }, {
                icon: <img src={milkTeaIcon} alt="icon" />,
                label: '奶茶助手',
                href: '#/milkTeaAssistant'
            }, {
                icon: <img src={carPartnerIcon} alt="icon" />,
                label: '校友拼车',
                href: '#/carPartner'
            }, {
                icon: <img src={anonymousTalkingIcon} alt="icon" />,
                label: '匿名说',
                href: '#/anonymousTalking'
            }, {
                icon: <img src={surveyCenterIcon} alt="icon" />,
                label: '问卷调查',
                href: '#/surveyCenter'
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
                            <MediaBoxHeader><img src={weatherIcon} alt="icon" /></MediaBoxHeader>
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