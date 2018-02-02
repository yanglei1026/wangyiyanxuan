import React,{Component} from 'react';
import './BackToTop.less';
export default class BackToTop extends Component{
    constructor(){
        super();
        this.state={};
    }
    handelClick=()=>{
        let scrollTop = document.documentElement.scrollTop;
        let timer = null;
        timer=setInterval(()=>{
            scrollTop -= 50;
            document.documentElement.scrollTop = scrollTop;
            if(scrollTop <= 0){
                clearInterval(timer);
                document.documentElement.scrollTop = 0;
            }
        },10);
    };
    render(){
        return (
            <div className="goTop" onClick={this.handelClick}><i className="iconfont icon-xiangshang"></i></div>
        )
    }
}
