import React, {Component} from 'react';
import "./index.less";
import {Link} from "react-router-dom";

export default class Invoice extends Component {
    constructor(){
        super();
        this.state={hide:false}
    }
    handleClick=()=>{
        this.setState({hide:!this.state.hide})
    }
    render() {
        return (
            <div className="invoice-total">
                <div className="invoice-top">
                    <div className="invoice-header">
                        <span>发票类型</span>
                        <span>电子普通发票</span>
                    </div>
                    <div className="invoice-text">电子普通发票是税局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票</div>
                </div>
                <div className="invoice-main">
                    <div className="invoice taitou">
                        <div className="invoice-name">*发票抬头</div>
                        <ul>
                            <li className="active" placeholder="请输入个人或姓名">个人</li>
                            <li placeholder="请输入单位名称">单位</li>
                        </ul>
                    </div>
                    <div className="invoice type">
                        <input type="text" value="个人" className="form-control"/></div>
                    <div className="invoice content">
                        <div>发票内容</div>
                        <div>明细 <i className="wenhao" onClick={this.handleClick}></i></div>
                    </div>
                    <div className="invoice money">
                        <div>发票金额</div>
                        <div>¥{}</div>
                    </div>
                </div>
                <div className="invoice-info">
                    <div className="info mobile">
                        <div>＊收票人手机{}</div>
                        <div><input type="mobile" className="form-control"/></div>
                    </div>
                    <div className="info email">
                        <div>收票人邮箱{}</div>
                        <div><input type="email" className="form-control"/></div>
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
                    <div className="invoice-qes"><Link to="/help">发票常见问题 </Link></div>
                </div>
                <div className="invoice-check">
                    <button>取消</button>
                    <button className="btn-right"><Link to="/order">保存</Link></button>
                </div>
                <div className={this.state.hide?"inv-hide show":"inv-hide"} >
                    <div className="hide">
                        <div className="inv-ka">依照国税总局开票法规，严选订单开具纸质普通发票、电子普通发票，开票内容为明细；礼品卡开票内容为预付卡</div>
                    <div className="inv-sure" onClick={this.handleClick}><button>确定</button></div>
                    </div>
                </div>
            </div>
        )
    }
}