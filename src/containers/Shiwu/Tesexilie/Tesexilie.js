import React from 'react';
import "./Tesexilie.less";
import FeatureData from "../../../../mock/Tese-Data";

let Feature = [];

FeatureData.forEach((item) => {
    Feature.push(item);
});

export default class Tesexilie extends React.Component {

    render() {
        return <div className="feature">
            {
                Feature.map((item,index) => (
                    <div className="topList" key={index}>
                       <div className="hd clearfix">
                           <div className="avatar">严选</div>
                           <span className="author">特色系列</span>
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



