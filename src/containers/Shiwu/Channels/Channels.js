import React from 'react';
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import "./index.less";

export default class Channels extends React.Component {
    componentDidMount() {
        let swiper2 = new Swiper('.channels .swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 15,
            freeMode: true,
            freeModeMomentum: true
        });

    }

    render() {
        return (
            <div className="channels">
                <div className="swiper-container swiper-container-horizontal swiper-container-free-mode">
                    <div className="list swiper-wrapper">
                        <div className="item swiper-slide">
                            <div className="u-icon">
                                <div className="topNum">285篇文章</div>
                            </div>
                            <div className="title">严选推荐</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">145篇文章</div>
                            </div>
                            <div className="title">挑款师推荐</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">51篇文章</div>
                            </div>
                            <div className="title">丁磊的好货推荐</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">329篇文章</div>
                            </div>
                            <div className="title">严选LOOK</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">8篇文章</div>
                            </div>
                            <div className="title">口碑商品</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">3篇文章</div>
                            </div>
                            <div className="title">特色系列</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">6篇文章</div>
                            </div>
                            <div className="title">严选全球</div>
                        </div>

                        <div className="item swiper-slide">
                            <div className="channelPic"></div>
                            <div className="u-icon">
                                <div className="topNum">75篇文章</div>
                            </div>
                            <div className="title">十点一刻</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}