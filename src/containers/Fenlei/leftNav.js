import React from 'react';
import {NavLink} from 'react-router-dom';
import './leftNav.less';
import action from  '../../redux/actions/fenlei';
import {connect} from  'react-redux';
@connect(state=>({...state.fenlei}),action)
export default class LeftNav extends React.Component {

    changeVal=(e)=>{
        console.log(e.target.tagName === 'UL');
        let tagname = e.target.tagName ;
        if (tagname !== 'UL'){
            let dataType = e.target.href.split("/").pop();
            this.props.tochangdata(dataType);
        }
    };

  render(){
    return <div className="fenleft" onClick={this.changeVal}>
            <ul>
                <li><NavLink to="/fenlei/tuijian">推荐区</NavLink></li>
                <li><NavLink to="/fenlei/gexing">个性专区</NavLink></li>
                <li><NavLink to="/fenlei/dongji">冬季专区</NavLink></li>
                <li><NavLink to="/fenlei/jujia">居家</NavLink></li>
                <li><NavLink to="/fenlei/canchu">餐厨</NavLink></li>
                <li><NavLink to="/fenlei/peijian">配件</NavLink></li>
                <li><NavLink to="/fenlei/fuzhuang">服装</NavLink></li>
                <li><NavLink to="/fenlei/dianqi">电器</NavLink></li>
                <li><NavLink to="/fenlei/xiwan">洗护</NavLink></li>
                <li><NavLink to="/fenlei/zahuo">杂货</NavLink></li>
                <li><NavLink to="/fenlei/yinshi">饮食</NavLink></li>
                <li><NavLink to="/fenlei/zhiqu">志趣</NavLink></li>
            </ul>
    </div>
  }
}