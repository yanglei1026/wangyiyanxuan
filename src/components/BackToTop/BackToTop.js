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
            scrollTop -= 500;
            document.documentElement.scrollTop = scrollTop;
            if(scrollTop <= 0){
                clearInterval(timer);
                document.documentElement.scrollTop = 0;
            }
        },100);
    };
    render(){
        return (
            <div className="goTop iconfont icon-iconfonticontrianglecopy" onClick={this.handelClick}></div>
        )
    }
}
