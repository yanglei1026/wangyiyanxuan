import React from 'react';
import "./Yanxuantuijian.less";
import RecommendData from "../../../../mock/Yanxuan-Data";

let Recommend=[];

RecommendData.forEach((item)=>{
    Recommend.push(item);
});

export default class Yanxuantuijian extends React.Component {
    render() {
        return <div className="feature">
            {
                Recommend.map((item,index) => (
                    <div className="topList" key={index}>
                        <div className="hd clearfix">
                            <div className="avatar">严选</div>
                            <span className="author">严选推荐</span>
                        </div>
                        <img className="picture" src={item.picture} alt=""/>
                        <div className="topicInfo">
                            <div className="bao">
                                <p className="title">{item.title}</p>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="subTitle">{item.subTitle}</p>
                        </div>
                    </div>
                ))
            }
            <div className="itemListNoMore">—— 没有更多了——</div>
        </div>
    }
}



