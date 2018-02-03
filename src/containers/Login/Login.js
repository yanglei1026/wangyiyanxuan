import React from 'react';
import "./Login.less";
import {Link} from "react-router-dom";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
export default class Login extends React.Component {

    handleClick=()=>{
        let username = this.x.value;
        let password = this.y.value;
        console.log(username, password);
    }

    render() {
        return (
            <div className="login-main-container">
                <DetailHeader/>
                <ul className="login">
                    <li><input className="username" ref={x=>this.x=x} type="text" placeholder="用户名"/></li>
                    <li><input className="password" ref={y=>this.y=y} type="text" placeholder="密码"/></li>
                    <li>
                        <button className="login-btn" onClick={this.handleClick}>登 录</button>
                    </li>
                    <li className="register"><Link to="/register">注册账号</Link></li>
                    <li className="forget-password"><Link to="/password">忘记密码</Link></li>
                </ul>
                <div className="other-way">其他方式登录</div>
            </div>
        )
    }
}