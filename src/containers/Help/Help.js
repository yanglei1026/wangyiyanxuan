import React, {Component} from 'react';
import "./index.less";

export default class Help extends Component {
    render() {
        return (
            <div className="help-pro">
                <div className="help-header">退款说明</div>
                <div className="help-main">
                    <span>1.</span>
                    <div className="help-text">
                        <p>收到退货包裹并确认无误后, 网易严选将在48小时内进行退款。
                            退款将原路返还, 不同的银行处理时间不同, 预计1-5个工作日到帐。</p>
                    </div>
                </div>
            </div>
        )
    }
}