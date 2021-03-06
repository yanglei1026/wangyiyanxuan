import React, {Component} from 'react';
import AddressList from "./AddressList";
import "./index.less";
import {Link}  from "react-router-dom";

export default class Address extends Component {
    constructor(){
        super();
        this.state={bool:false,sel:true}
    }
    confirmAdd=()=>{
        this.setState({sel:!this.state.sel});

    };
    selAdd=()=>{
        this.setState({bool:!this.state.bool});

    }
    render() {
        return (
            <div className="address-info">
                <form action="" >
                    <div className="address-select">
                        <div><p onClick={this.selAdd}>省份、城市、区县</p></div>
                        <div className="in"><input  name="address" className="form-control" placeholder="详细地址，如街道、楼盘号等"/></div>
                        <div className="in"><input name="name"  placeholder="姓名"/></div>
                        <div className="in"><input name="mobile" placeholder="手机号码"/></div>

                    </div>
                    <div className="address-default">
                        <i onClick={this.confirmAdd} className = {this.state.sel?"sel-bg":""}></i>  <span> 设为默认地址</span>
                    </div>
                    <div className="address-keep"><Link to="/order">保存</Link></div>
                </form>
                {this.state.bool?<AddressList/>:""}
            </div>
        )
    }
}