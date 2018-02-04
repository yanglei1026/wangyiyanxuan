import React from 'react';
import "./Register.less";
import {Link} from "react-router-dom";
import {toRegister} from "../../api/register"
export default class Register extends React.Component {

    handleClick = () =>{
        let username = this.x.value.trim();
        let password = this.y.value.trim();

        if(username.length*password.length){
            toRegister(username, password);
            setTimeout(()=>{
                this.props.history.push("/login")
            },500)
        }
    };

    render() {
        return (
            <div className="regitser-container">
                <ul className="register">
                    <li><input className="username" ref={x=>this.x=x} type="text" placeholder="注册 用户名"/></li>
                    <li><input className="password" ref={y=>this.y=y} type="password" placeholder="密码"/></li>
                    <li>
                        <button className="login-btn" onClick={this.handleClick}>注 册</button>
                    </li>
                    <li className="register"><Link to="/login">已有账号</Link></li>
                </ul>
            </div>
        )
    }
}