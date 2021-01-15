import React, { Component } from 'react';
import { Button, ButtonArea, Form, FormCell, CellHeader, CellBody, CellFooter, Label, Input, VCode } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css';
import Header from '../../Layout/Header';
import vcodeSrc from '../../logo.svg';

class Login extends Component {
  componentWillMount() {
    this.setState({
      fullYear: new Date().getFullYear()
    })
  }
  render() {
    return (
      <div className="App">
        <Header appTitle="统一身份认证系统" />
        <p className="App-intro">
          通过校园网 <code>统一身份认证系统</code> 登录
        </p>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>账号</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="输入学号/工号" />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>密码</Label>
            </CellHeader>
            <CellBody>
              <Input type="password" placeholder="输入账户密码" />
            </CellBody>
          </FormCell>
          <FormCell vcode>
            <CellHeader>
              <Label>验证码</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="输入图形验证码" />
            </CellBody>
            <CellFooter>
              <VCode src={vcodeSrc} />
            </CellFooter>
          </FormCell>
        </Form>
        <ButtonArea direction="horizontal">
          <Button type="warn">新生注册</Button>
          <Button type="primary">立即登录</Button>
        </ButtonArea>
        <p className="loginFooter">
          温馨提示：系统已纳入统一身份认证，此账号密码与校园网教务系统、喜鹊儿APP保持一致。
        </p>
        <p className="App-footer">
          单点登录能力由 <code>叮云科技</code> 提供技术支持
          <br />
          &copy; 2012-{this.state.fullYear} DingStudio Technology
        </p>
      </div>
    );
  }
}

export default Login;
