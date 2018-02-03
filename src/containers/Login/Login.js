import React from 'react';
import "./Login.less";
import {Link} from "react-router-dom";
export default class Login extends React.Component {

    render() {

        return (
            <div>
              <ul className="login">
                <li><input className="username" ref="username" type="text" placeholder="用户名"/></li>
                <li><input className="password" ref="password" type="text" placeholder="密码"/></li>
                <li>
                  <button className="login-btn" onClick={this.handleClick}>登 录</button>
                </li>
                <li className="register"><Link to="/register">注册账号</Link></li>
                <li className="forget-password"><Link to="/password">忘记密码</Link></li>

              </ul>
            </div>

        )
    }
}

