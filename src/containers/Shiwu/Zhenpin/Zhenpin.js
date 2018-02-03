import React from 'react';
import './index.less';

export default class Zhenpin extends React.Component {
    render(){
        return (
            <div className="zhenPin">
                <div className="container">
                    <div className="module-title">
                        严选甄品
                    </div>
                    {/*为你推荐 保暖*/}
                    <a href="javascript:" className="mainItem">
                        <div className="mainPic">
                            <div className="topicTag">
                                <div className="exploreTag">
                                    口碑商品
                                </div>
                            </div>
                        </div>
                        <div className="topicInfo">
                            <div className="line1">
                                <div className="title">
                                    新时代煮饭神器
                                </div>
                            </div>
                            <div className="line2">
                                让米饭变得更好吃的秘诀
                            </div>
                        </div>
                    </a>
                    {/*味道 时光机*/}
                    <a href="javascript:" className="minorItem">
                        <div className="topicInfo">

                            <div className="line1">
                                它让水变得有点甜
                            </div>
                            <div className="line2">
                                德国进口滤水壶，让全家饮水更安心
                            </div>
                        </div>
                        <div className="minorPic">
                            <div className="imgContainer">
                                <div className="topicTag">
                                    口碑商品
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="javascript:" className="minorItem">
                        <div className="topicInfo">

                            <div className="line1">
                                幸福的家，不能少懒人沙发
                            </div>
                            <div className="line2">
                                进口粒子饱满填充，有弹性，更静音
                            </div>
                        </div>
                        <div className="minorPic">
                            <div className="imgContainer imgContainer02" >
                                <div className="topicTag">
                                    口碑商品
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}