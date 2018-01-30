import React,{Component} from "react";
import {Link} from 'react-router-dom';
export default class Detail extends  Component{
  render(){
      return(
          <div>
              <Link to='/Detail_server'>去服务</Link>
              <Link to='/Detail_choose'>去选择</Link>
          </div>
      )
  }
}
