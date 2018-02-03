import React from 'react';
import "./Register.less";
import {Link} from "react-router-dom";
export default class Register extends React.Component {
  render(){
      return(
          <div>
              <ul className="register">
                  <li><input className="username" ref="username" type="text" placeholder="注册 用户名"/></li>
                  <li><input className="password" ref="password" type="text" placeholder="密码"/></li>
                  <li><button className="login-btn" onClick={this.handleClick}>注 册</button></li>
                  <li className="register"><Link to="/login">已有账号</Link></li>
              </ul>
          </div>
      )
  }
}



