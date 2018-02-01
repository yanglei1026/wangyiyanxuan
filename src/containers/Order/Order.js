import React, {Component} from 'react';
import "./index.less";
import {Link} from "react-router-dom";

export default class Order extends Component {
    render() {
        return (
            <div className="cartOrder">
                <div className="defaultOrder">
                    <Link to="/order">
                        <div className="left">
                            <p className="uname">姓名</p>
                            <div><span>默认</span></div>
                        </div>
                        <div className="right">
                            <p className="utel">电话</p>
                            <p className="uinfo">地址</p>
                        </div>
                        <i></i>
                    </Link>

                </div>
                <div className="couponOrder">
                    <div>暂无可用优惠券<span>0张</span><i></i></div>
                    <p><span></span> 礼品卡:<i></i></p>
                </div>
                <div className="totalOrder">
                    <div>商品合计</div>
                    <div>运费</div>
                    <div>优惠券</div>
                    <Link to="/invoice"><p><span></span> 我要开发票<i></i></p></Link>
                </div>
                <div className="listOrder">
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="accordOrder">
                    <p><span></span> 我同意 <a href="">《网易严选服务协议》</a></p>
                </div>
                <div className="OrderPay">
                    <span>应付:¥ </span>
                    <span>去付款</span>
                </div>
            </div>
    )
    }
    }