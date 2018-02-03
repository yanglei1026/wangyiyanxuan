import React,{Component} from "react";
import './Detail_server.less';
import {Link} from 'react-router-dom';
import DetailHeader from "../../components/DetailHeader/DetailHeader";
export default class Fenlei extends  Component{
  render(){
      return (
          <div className="server">
              <DetailHeader/>
              <h3 className="title">服务</h3>
              <ul>
                  <li>
                      <h3><i></i>30天无忧退换货</h3>
                      <p>自收到商品之日起30天内，可在线申请无忧退货服务（食品、贴身衣物等特殊商品除外）。</p>
                  </li>
                  <li>
                      <h3><i></i>48小时快速退款</h3>
                      <p>收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账，可在线申请无忧退货服务（食品、贴身衣物等特殊商品除外）。</p>
                  </li>
                  <li>
                      <h3><i></i>满88元免邮费</h3>
                      <p>单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。</p>
                  </li>
                  <li>
                      <h3><i></i>网易自营品牌</h3>
                      <p>网易原创生活类电商品牌，所有商品均为网易自营，品质保证。</p>
                  </li>
                  <li>
                      <h3><i></i>国内部分地区无法配送</h3>
                      <p>不支持省份: 新疆</p>
                  </li>
              </ul>
              <Link to='/detail' className="go-detail">返回</Link>
          </div>
      )
  }
}
