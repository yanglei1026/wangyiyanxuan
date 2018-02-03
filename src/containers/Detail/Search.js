import React from 'react';
import './search.less';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {

    render(){
        return (
            <div className="search">
                {/*header*/}
                <div className="search-header">
                    <div className="search-box">
                        <i className="iconfont icon-fangdajing"></i>
                        <input className="search-text" type="text" placeholder='10001件新春出行礼物限时送'/>
                    </div>
                    <Link to='/detail' className="search-cancel" >取消</Link>
                </div>
                {/*body*/}
                <div className="search-body">
                    <p className="body-title">热门搜索</p>
                    <ul className="body-content">
                        <li className="active">海外好物每件78折</li>
                        <li className="active">新年红好物推荐</li>
                        <li className="active">出行每满150减30</li>
                        <li>四件套</li>
                        <li>男鞋</li>
                        <li>保暖内衣</li>
                        <li>围巾</li>
                        <li>大衣</li>
                    </ul>
                </div>
            </div>
        )
    }
}