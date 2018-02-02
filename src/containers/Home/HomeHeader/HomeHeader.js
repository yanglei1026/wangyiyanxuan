import React, {Component} from "react";
import logo from "../../../../resource/images/logo.png";
import './homeHeader.less';
import {NavLink} from "react-router-dom"

export default class HomeHeader extends Component {
    constructor() {
        super();

    }

    componentDidMount() {
        let newSwiper1 = new Swiper('#swiper1', {
            slidesPerView: 6,
        })
    }

    render() {
        return (
            <div className="home-header">
                <div className="home-header-search">
                    <h1><a><img src={logo}/></a></h1>
                    <div className="search">
                        <i className="iconfont icon-fangdajing"></i><span>搜索商品, 共9930款好物</span>
                    </div>
                </div>
                <div className="swiper-container" id="swiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><NavLink to="/home">推荐</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">居家</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">餐厨</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">配件</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">服装</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">电器</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">洗护</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">杂货</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home">饮食</NavLink></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                    </div>
                </div>


            </div>

        )
    }
}
