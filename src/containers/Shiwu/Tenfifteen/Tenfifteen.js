import React from 'react';
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css"
import './index.less';
import {Link} from "react-router-dom"

export default class Tenfifteen extends React.Component {
    componentDidMount() {
        let swiper2 = new Swiper('.tenFifteen .swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            freeMode: true,
            freeModeMomentum: true
        });
    }

    render() {
        return (
            <div className="tenFifteen">
                <div className="inner">
                    <div className="module-title">
                        十点一刻
                    </div>

                    <div className="swiper-container swiper-container-horizontal swiper-container-free-mode">
                        <div className="list swiper-wrapper">
                            <Link to="/shidianyike" className="item swiper-slide">
                                <div className="line-title">一 今日话题 一</div>
                                <div className="title">和喵星人的故事</div>
                                <div className="desc">面包和猫都会有的</div>
                                <div className="joinInfo">
                                    <div className="inner">
                                        <div className="avatars">
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                        </div>
                                        <div className="join">
                                            <span>16人参与话题</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <a href="javascript:" className="item swiper-slide">
                                <div className="line-title">今日话题</div>
                                <div className="title">你拍的雪景</div>
                                <div className="desc">素颜的城市有多美</div>
                                <div className="joinInfo">
                                    <div className="inner">
                                        <div className="avatars">
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                        </div>
                                        <div className="join">
                                            <span>25人参与话题</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:" className="item swiper-slide">
                                <div className="line-title">今日话题</div>
                                <div className="title">寒假在家都做什么解乏</div>
                                <div className="desc">家里的娱乐方式</div>
                                <div className="joinInfo">
                                    <div className="inner">
                                        <div className="avatars">
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                            <div className="avatar"><img src="" alt=""/></div>
                                        </div>
                                        <div className="join">
                                            <span>25人参与话题</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:" className="swiper-slide item">
                                <div className="inner">
                                    <div className="txt">
                                        查看全部话题
                                    </div>
                                    <i className="right-arrow">
                                    </i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}