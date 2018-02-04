import React,{Component} from "react";
import "./Item.less";
import {withRouter,Link} from "react-router-dom"

@withRouter
export default class Item extends  Component{

  render(){
      return (
          <div className="item-container">
              <Link to={{pathname:"/detail", state:{name:"yanglei"}}}>
                  <img className="item-cover" src={this.props.item.cover}/>
                  <div className="item-title">{this.props.item.detail}</div>
                  <div className="item-bot">
                      <p className="item-tag"><span className="tag">{this.props.item.tip01}</span></p>
                      <p className="item-info">{this.props.item.info}</p>
                      <span className="item-price price">{this.props.item.price}</span>
                  </div>
              </Link>
          </div>
      )
  }
}
