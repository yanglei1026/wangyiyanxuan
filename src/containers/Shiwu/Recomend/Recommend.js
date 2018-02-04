import React from 'react';
import "./index.less"
import author01 from './author1.jpg';
import author02 from './author2.png';
import {Link} from "react-router-dom"

export default class Recommend extends React.Component {
    render(){
        return (
            <div className="midRec">
                <div className="recommend">
                    <div className="container">
                        <div className="module-title">
                            为你推荐
                        </div>
                        {/*为你推荐 保暖*/}
                        <Link to="/yanxuantuijian" className="mainItem">
                            <div className="mainPic">
                                <div className="topicTag">
                                    <div className="exploreTag">
                                        严选推荐
                                    </div>
                                </div>
                            </div>
                            <div className="topicInfo">
                                <div className="line1">
                                    <div className="title">
                                        买对保暖利器，降温不用愁
                                    </div>
                                    <div className="price">
                                        29元起
                                    </div>
                                </div>
                                <div className="line2">
                                    雪天必备好物
                                </div>
                            </div>
                        </Link>
                        {/*味道 时光机*/}
                        <a href="javascript:" className="minorItem">
                            <div className="topicInfo">
                                <div className="author-container">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src={author01} alt=""/>
                                        </div>
                                        <div className="nickname">王伟忠</div>
                                    </div>
                                </div>
                                <div className="line1">
                                    味道是台时光机器
                                </div>
                                <div className="line2">
                                    每次吃到炸排骨，那味道立刻把我带回到了《康熙来了》的摄影棚。而每次，我吃到酱拌面，我就瞬间回到了（台北）眷村，回到我的老家。那时候的街坊邻居都来自大江南北，那个四川妈妈做的辣酱、湖南妈妈做的腊肉、北方妈妈包的饺子擀的面条，舌尖传来的味道让每一个外乡人瞬间就回到了遥远的家乡，回到父母的身边。
                                </div>
                            </div>
                            <div className="minorPic">
                                <div className="imgContainer">
                                    <div className="topicTag">
                                        挑款师推荐
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/*丁磊推荐*/}
                        <a href="javascript:" className="minorItem">
                            <div className="topicInfo">
                                <div className="author-container">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src={author02} alt=""/>
                                        </div>
                                        <div className="nickname">丁磊</div>
                                    </div>
                                </div>
                                <div className="line1">
                                    提升春节幸福感的13件零食
                                </div>
                                <div className="line2">
                                    过年的时候，走亲访友、闲话家常，嗑嗑瓜子、吃几块糖，各家亲戚家中的美食都能吃到。汪曾祺汪老曾经说：“一个人的口味要宽一点，杂一点，南甜北咸东辣西酸，都去尝尝”。农历腊月，网易严选团队为大家严选了13种不同口味的零食，大家可以买回去多尝试，多分享，和家人过一个丰盛、美味的新年。
                                </div>
                            </div>
                            <div className="minorPic">
                                <div className="imgContainer imgContainer02" >
                                    <div className="topicTag">
                                        丁磊的好货推荐
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}