import React, {Component} from 'react';

export default class Order extends Component {
    render() {
        return (
                <div className="cartOrder">
                    <div className="defaultOrder">
                        <div className="left">
                            <p>姓名</p>
                            <span>默认</span>
                        </div>
                        <div className="right">
                            <p>电话</p>
                            <p>地址</p>
                        </div>
                        <i></i>
                    </div>
                    <div className="couponOrder">
                        <div>暂无可用优惠券<span>0张</span><i></i></div>
                        <p><span></span> 礼品卡:<i></i></p>
                    </div>
                    <div className="totalOrder">
                        <div>商品合计</div>
                        <div>运费</div>
                        <div>优惠券</div>
                        <p><span></span> 我要开发票<i></i></p>
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