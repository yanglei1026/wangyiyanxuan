import React,{Component} from "react";
import LeftNav from "./leftNav";
import RightCon from "./rightCon";
import './fenlei.less';
import {getData} from '../../api/fenlei';
export default class Fenlei extends  Component{
    getParams =()=>{
    };
  render(){
      return <div className="fenwrap" style={{display:'flex'}}>
          <LeftNav getParams={this.getParams} />
          <RightCon  />
      </div>
  }
}
