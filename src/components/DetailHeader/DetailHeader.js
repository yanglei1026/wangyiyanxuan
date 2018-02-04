import React from 'react';
import './DetailHeader.less';
import logo from "../../../resource/images/logo.png";
import {Link} from 'react-router-dom';
export default class DetailHeader extends React.Component {
    render(){
        return (
            <div className="detail-header">
                <Link to='/home' className="iconfont icon-shouye"></Link>
                <img src={logo} alt=""/>
                <div className="iconRight">
                    <Link to='/search' className="iconfont icon-fangdajing"></Link>
                    <Link to='/cartmore' className="iconfont icon-gouwuche"></Link>
                </div>
            </div>
        )
    }
}