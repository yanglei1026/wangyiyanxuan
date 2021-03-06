import React, {Component} from "react";
import logo from "../../../../resource/images/logo.png";
import './homeHeader.less';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../../redux/actions/home"

@connect(state=>({...state.home}),actions)
export default class HomeHeader extends Component {
    constructor() {
        super();

    }

    handleClick = (e) =>{
        let tagname = e.target.tagName ;
        if (tagname !== 'DIV'){
            let dataType = e.target.href.split("/").pop();
            if(dataType===undefined) return;
            this.props.getHomeData(dataType);
        }
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
                    <div className="swiper-wrapper" onClick={this.handleClick}>
                        <div className="swiper-slide"><NavLink to="/home/" exact>推荐</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/jujia">居家</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/canchu">餐厨</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/peijian">配件</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/fuzhuang">服装</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/dianqi">电器</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/xihu">洗护</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/zahuo">杂货</NavLink></div>
                        <div className="swiper-slide"><NavLink to="/home/yinshi">饮食</NavLink></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                    </div>
                </div>


            </div>

        )
    }
}
