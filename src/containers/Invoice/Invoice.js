import React, {Component} from 'react';
import "./index.less";
import {Link} from "react-router-dom";

export default class Invoice extends Component {
    render() {
        return (
            <div className="invoice-total">
                <div className="">
                    <div className="invoice-header">
                        <span>发票类型</span>
                        <span>电子普通发票</span>
                        <p>电子普通发票是税局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票</p>
                    </div>
                    <div className="invoice-main">
                        <div>*发票抬头</div>
                        <ul>
                            <li placeholder="请输入个人或姓名">个人</li>
                            <li placeholder="请输入单位名称">单位</li>
                        </ul>
                        <div><input type="text" value="" className="form-control" /></div>
                    </div>
                    <div className="invoice-info">
                        <div>
                            <div>＊收票人手机</div>
                            <div><input type="mobile" className="form-control"/></div>
                        </div>
                        <div>
                            <div>收票人邮箱</div>
                            <div><input type="email" className="form-control" /></div>
                        </div>
                    </div>
                    <div className="invoice-tip">
                        <div className="invoice-type">
                            更多发票类型>>
                        </div>
                        <span className="invoice-notice">
                            <span>发票须知</span>
                            <span>1.  依照税局最新开票法规，纸质普通发票和电子普通发票，开具内容均为明细</span>
                            <span>2. 开票金额为用户实际支付的金额（不含礼品卡与不支持该发票类型的商品实付金额）</span>
                            <span>3. 电子发票可在确认收货后，在“订单详情页”或“售后服务-我的发票”下载</span>
                            <span>4. 未随箱寄出的纸质发票会在发货后15-30个工作日单独寄出</span>
                            <span>5. 增值税专用发票将会在所有包裹发货后15-30个工作日单独寄出</span>
                            <span>6. 单笔订单只支持开具一种类型的发票</span>
                            <span>7. 年购订单发票随每期子单寄出</span>
                        </span>
                    </div>
                    <Link to="/help"><div>发票常见问题</div></Link>
                </div>
                <div className="invoice-check">
                    <button>取消</button>
                    <button className="btn-right">保存</button>
                </div>
            </div>
        )
    }
}