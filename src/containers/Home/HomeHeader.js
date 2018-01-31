import React, {Component} from "react";
import logo from "../../../resource/images/logo.png";
import {Carousel} from "antd-mobile"


export default class HomeHeader extends Component {
    constructor(){
        super();
    }
    componentDidMount(){}


    render() {
        return (
            <div className="home-header">
                <div className="home-header-search">
                    <img src={logo}/>
                    <div className="search">
                        <i className="iconfont icon-fangdajing"></i><span>搜索商品, 共9930款好物</span>
                    </div>
                </div>
                <div className="home-header-nav"></div>
            </div>
        )
    }
}
