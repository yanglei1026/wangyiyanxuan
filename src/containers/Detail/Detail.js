import React,{Component} from "react";
import logo from "../../../resource/images/logo.png";
import './Detail.less';
import sliders from '../../../mock/detail-banner';

let IMG_DATA = [];
sliders.forEach(item=>{
    IMG_DATA.push(`${item.img}`);
});


export default class Detail extends  Component{
    render(){
        return (
            <div>
                <div className="detail-header">
                    <i className="iconfont icon-shouye"></i>
                    <img src={logo} alt=""/>
                    <div className="iconRight">
                        <i className="iconfont icon-fangdajing"></i>
                        <i className="iconfont icon-gouwuche"></i>
                    </div>
                </div>
                <div className="detail-banner"></div>
                <div className="detail-footer">
                    <i className="iconfont icon-fuwuerji"></i>
                    <p className="addCart">加入购物车</p>
                    <p className="buy">立即购买</p>

                </div>
            </div>
        )
    }
}
