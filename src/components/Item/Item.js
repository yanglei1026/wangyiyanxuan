import React,{Component} from "react";
import "./Item.less";
export default class Item extends  Component{

  render(){
      return (
          <div className="item-container">
              <img className="item-cover" src="http://yanxuan.nosdn.127.net/02da8bce2fa3a182d398f6a09e8ac2f5.png?imageView&quality=65&thumbnail=330x330"/>
              <div className="item-title">【超强保温】升级版，316不锈钢</div>
              <div className="item-bot">
                  <p className="item-tag"><span className="tag">爆款</span></p>
                  <p className="item-info">德式轻量保温杯</p>
                  <span className="item-price price">¥299</span>
              </div>
          </div>
      )
  }
}
