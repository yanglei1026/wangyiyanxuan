import React, {Component} from "react";
import "./index.less";
import "../../../resource/images/cartbg.png";
import {Link} from "react-router-dom";
import CartMore from "./CartMore";

export default class Cart extends Component {
    handleClick=(cb)=>{

    }
    render() {
        return (
               <div className="CartEmpty">
                   <div className="Cart-header">
                       <span>购物车</span>
                   </div>
                   <div className="Cart-main">
                       <div className="Cart-nav">
                           <ul>
                               <li>＊30天无忧退货</li>
                               <li>＊48小时快速退款</li>
                               <li>＊满88元免邮费</li>
                           </ul>
                       </div>

                       <div className="Cart-login">
                           <img src="../../../resource/images/cartbg.png" alt=""/>
                           <div className="Cart-title">去添加点什么吧</div>
                           <Link to="/order"><div className="Cart-btn" >登录</div></Link>
                       </div>
                   </div>
               </div>
        )
    }
}

