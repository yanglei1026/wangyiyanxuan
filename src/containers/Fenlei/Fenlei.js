import React,{Component} from "react";
import LeftNav from "./leftNav";
import RightCon from "./rightCon";
import './fenlei.less';
export default class Fenlei extends  Component{
  render(){
      return <div className="fenwrap" style={{display:'flex'}}>
          <LeftNav/>
          <RightCon/>
      </div>
  }
}
