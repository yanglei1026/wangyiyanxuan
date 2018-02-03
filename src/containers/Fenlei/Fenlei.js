import React,{Component} from "react";
import LeftNav from "./leftNav";
import RightCon from "./rightCon";
import "./fenlei.less"

export default class Fenlei extends  Component{
    getParams =()=>{
    };
    render(){
        return <div className="fenwrap" style={{display:'flex'}}>
            <div className="fenlei-search-wrap">
                <div className="fenlei-search">
                    <i className="iconfont icon-fangdajing"></i><span>搜索商品, 共9930款好物</span>
                </div>
            </div>
            <LeftNav getParams={this.getParams} />
            <RightCon  />
        </div>
    }
}