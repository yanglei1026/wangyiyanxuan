import React, {Component} from 'react';

export default class Address extends Component {
    render() {
        return (
            <div className="address">
                <div>
                    <form action="selected"></form>
                    省份、城市、区县
                    详细地址，如街道、楼盘号等
                    姓名
                    手机号码
                </div>
                <div className="defaultAddress">
                    <span></span> 设为默认地址
                </div>
                <div className="baocun">保存</div>
            </div>
        )
    }
}