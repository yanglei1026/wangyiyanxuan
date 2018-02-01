import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/actions/choose';
import './Detail.less';
import sliders from '../../../mock/detail-banner';
import DetailDescribe from "./DetailDescribe";
import content from '../../../mock/detail-describe';
import picture from '../../../mock/detail-picture';
import DetailBanner from "./DetailBanner";
import BackToTop from '../../components/BackToTop/BackToTop';
import DetailHeader from "../../components/DetailHeader/DetailHeader";


let IMG_DATA = [];
sliders.forEach(item=>{
    IMG_DATA.push(`${item.img}`);
});
let describe = [];
content.forEach(item=>{
    describe.push(item);
});
let PIC_DATA = [];
picture.forEach(item=>{
    PIC_DATA.push(item);
});

function changeTop(flag){
    window.onscroll = ()=>{
        let scrT = document.documentElement.scrollTop;
        let winH = document.documentElement.clientHeight;
        if(scrT > winH){
            this.setState({isShow:!flag});
        }else{
            this.setState({isShow:flag});
        }
    }
}
@connect(state=>({...state.choose}),actions)
export default class Detail extends Component{
    constructor(){
        super();
        this.state={isShow:false}
    }
    componentDidMount(){
        changeTop.call(this,this.state.isShow);
    }
    render(){
        return (
            <div className="detail">
                <DetailHeader/>
                <DetailBanner item={IMG_DATA}/>
                <DetailDescribe  item={describe} cur={PIC_DATA}/>
                <div className="detail-footer">
                    <i className="iconfont icon-fuwuerji"></i>
                    <Link to={this.props.how===undefined?'/detail_choose':'/cart'} className="skip addCart">加入购物车</Link>
                    <Link to={this.props.how===undefined?'/detail_choose':'/buy'} className="skip buy">立即购买</Link>

                </div>
                <div>
                    {this.state.isShow?<BackToTop/>:''}
                </div>
            </div>
        )
    }
}
