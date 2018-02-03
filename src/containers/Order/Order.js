import React, {Component} from 'react';
import "./index.less";
import {Link} from "react-router-dom";
import DetailHeader from "../../components/DetailHeader/DetailHeader";

export default class Order extends Component {
    constructor() {
        super();
        this.state = {agree: true}
    }

    ChangeAgree = () => {
        this.setState({agree: !this.state.agree})
    }

    render() {
        return (
            <div className="cartOrder">
                <DetailHeader/>
                <Link to="/address">
                    <div className="defaultOrder">
                        <div className="left">
                            <p className="uname">姓名</p>
                            <div><span>默认</span></div>
                        </div>
                        <div className="right">
                            <p className="utel">电话</p>
                            <p className="uinfo">地址</p>
                        </div>
                        <i></i>
                    </div>
                </Link>
                <div className="couponOrder">
                    <div className="invoiceOrder">暂无可用优惠券<span>0张</span><i></i></div>
                    <div className="giftOrder">
                        <div className="giftInner">
                            <div className="giftText">
                                <i className="giftBg"></i>
                                <span className="text">
                                <span>礼品卡: ¥</span>
                                <span>0:00</span>
                            </span>
                            </div>
                        </div>
                        <i className="arrow"></i>
                    </div>
                </div>
                <div className="totalOrder">

                    <div className="total">商品合计 <span>¥99:00</span></div>
                    <div className="total">运费 <span>¥0:00</span></div>
                    <div className="total">优惠券 <span>-¥0:00</span></div>
                    <Link to="/invoice">
                        <div><i className="giftBg"></i><p>我要开发票</p><i className="arrow"></i>
                        </div>
                    </Link>
                </div>
                <div className="listOrder">
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="accordOrder">
                    <div onClick={this.ChangeAgree}><i className={this.state.agree ? "choseBg" : ""}></i> 我同意 <Link
                        to="/agreement">《网易严选服务协议》</Link></div>
                </div>
                <div className="OrderPay">
                    <span>应付:¥ </span>
                    <Link to="/pay"><span>去付款</span></Link>
                </div>
            </div>
        )
    }
}