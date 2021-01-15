import React, { Component } from 'react';
import { Msg } from 'react-weui';
import Header from '../../Layout/Header';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
class UndefinedPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Msg type="warn" title="呀，此页面不可用" description="我们非常抱歉的通知您，当前所访问的页面不存在或因业务调整暂不可用。" />
            </div>
        )
    }
}
export default UndefinedPage;