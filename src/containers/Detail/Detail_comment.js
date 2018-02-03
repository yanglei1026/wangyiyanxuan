import React,{Component} from 'react';
import './Detail_comment.less';
import scoreDate from './Detail_comments.json';
import commentData from './Detail_comment.json';
import BackToTop from "../../components/BackToTop/BackToTop";
import '../../img/default.jpg';
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import {Link} from 'react-router-dom';

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
export default class Detail_comment extends Component{
    constructor(){
        super();
        this.state={
            data:commentData.data,
            scoreDate:scoreDate.data.result,
            close:true,
            number:5,
            isShow:false
        };
    }

    //点击 ‘更多’
    handleClick=()=>{
        this.setState({close:!this.state.close});
    };

    //图片延迟加载
    componentDidMount(){
        let offset = function (curEle) {
            let l = curEle.offsetLeft,
                t = curEle.offsetTop,
                p = curEle.offsetParent;
            while (p.tagName !== 'BODY') {
                if (isCompatible === false && isSupportJSON === true) {
                    l += p.clientLeft;
                    t += p.clientTop;
                }
                l += p.offsetLeft;
                t += p.offsetTop;
                p = p.offsetParent;
            }
            return {left: l, top: t};
        };
        let lazyLoad = ()=>{
            let clientHeight = document.documentElement.clientHeight;
            let imgs = document.querySelectorAll('.score_list .lazyLoadImg');
            let scrollTop =  document.documentElement.scrollTop;
            imgs.forEach((item,index)=>{
                if(clientHeight+scrollTop>offset(item).top){
                    item.src = item.getAttribute('data-src');
                }

            })
        };
        lazyLoad();
        window.onscroll = lazyLoad;
        this.setState({number:0});
        changeTop.call(this,this.state.isShow);
    }

    //点击上面筛选条件
    liClick(index){
        this.setState({number:index});

    };

    render(){
        let arr = [];
        if(this.state.number===0){
            arr = this.state.scoreDate;
        }else{
            arr = this.state.scoreDate.filter((item,index)=>{
                return this.state.number == item.memberLevel
            })

        }
        return (
            <div>
                <DetailHeader/>
                <div className="scoreBox clearfix">
                    <div className="score clearfix">
                        <span className="score_t">评分</span>
                        <div className="starBox">
                            <span className="bigStart"></span>
                            <span className="bigStart"></span>
                            <span className="bigStart"></span>
                            <span className="bigStart"></span>
                            <span className="bigStart"></span>
                        </div>
                        <i><b>98% </b>好评</i>
                    </div>
                    <div>
                        <ul className={this.state.close?'chooseList clearfix close':'chooseList clearfix'}>
                            {this.state.data.map((item,index)=>{
                                return <li key={index} onClick={()=>{this.liClick(index)}} className={this.state.number==index?'active':''}>{item.name}<span>({item.strCount})</span></li>
                            })}
                        </ul>
                        <div className="moreBox" onClick={this.handleClick}>
                            {this.state.show?<span className="more">更多<i className="iconfont icon-iconfontarrows1"></i></span>:<span className="more">收起<i className="iconfont icon-iconfonticontrianglecopy"></i></span>}
                        </div>
                    </div>
                </div>
                <ul className="score_list">
                    {
                        arr.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="score_top clearfix">
                                        <img className="score_img" src={item.frontUserAvatar} alt=""/>
                                        <i>{item.frontUserName}</i>
                                        <div className="starBox">
                                            <span className="bigStart"></span>
                                            <span className="bigStart"></span>
                                            <span className="bigStart"></span>
                                            <span className="bigStart"></span>
                                            <span className="bigStart"></span>
                                        </div>
                                    </div>
                                    <p className="score_date">
                                        {item.commentReplyVO!=null ? item.commentReplyVO.createTime : ''}
                                        <i>{item.skuInfo.map((one,index)=>{
                                            return one
                                        })}</i>

                                    </p>
                                    <p className="score_text">{item.content}</p>
                                    <div className="imgBox">
                                        {item.picList.map((every,index)=>{
                                            return <img className="lazyLoadImg" data-src={every} src={require('../../img/default.jpg')} alt="" key={index}/>
                                        })}
                                    </div>
                                    {item.commentReplyVO!=null ? <p className="score_bot">小选回复：<i>{item.commentReplyVO.replyContent}</i></p> : ''}

                                </li>
                            )
                        })
                    }

                </ul>
                <Link to='/detail' className="go-detail">返回</Link>
                {this.state.isShow?<BackToTop/>:''}
            </div>
        )
    }
}
