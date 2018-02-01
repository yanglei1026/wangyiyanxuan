import React from 'react';
import Swiper from "swiper";
import "../../../../src/util/reset.less"
 import "../../../../node_modules/swiper/dist/css/swiper.min.css"
import './index.less';


export default class Banner extends React.Component {
    componentDidMount(){
        let swiper = new Swiper('.banner .swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: false, //活动块默认居中
            slidesPerView: 'auto',//容器中显示的滑块个数
            coverflowEffect: {
                rotate: 0,  //切换时y轴的旋转角度
                stretch: 5, //每个slide之间的拉伸值，越大slide靠得越紧
                depth: 200, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100
                modifier: 1.2,
                slideShadows : false,
            }
        });

    }

    render() {
        return (
            <div className="banner">
                <div
                    className="swiper-container swiper-container-coverflow swiper-container-3d swiper-container-horizontal swiper-container-wp8-horizontal">
                    <div className="swiper-wrapper ">
                        <div className="swiper-slide swiper-slide-active">
                            <div className="cover"></div>
                            <div className="content">
                                <div className="line-title">
                                    <div className="inner">
                                        每满99减20
                                    </div>
                                </div>
                                <div className="title">
                                    难忘的食物
                                </div>
                                <div className="title">
                                    都有家的味道
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="cover"></div>
                            <div className="content">
                                <div className="line-title">
                                    <div className="inner">
                                        翻译蛋限时特价
                                    </div>
                                </div>
                                <div className="title">
                                    带上它们
                                </div>
                                <div className="title">
                                    升级旅行体验
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide ">
                            <div className="cover"></div>
                            <div className="content">
                                <div className="line-title">
                                    <div className="inner">
                                        卫生巾满2件 7.5折
                                    </div>
                                </div>
                                <div className="title">
                                    带给你这片
                                </div>
                                <div className="title">
                                    舒适的安全感
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="cover"></div>
                            <div className="content">
                                <div className="line-title">
                                    <div className="inner">
                                        低至5折起
                                    </div>
                                </div>
                                <div className="title">
                                    雪天必备
                                </div>
                                <div className="title">
                                    终极保暖组合
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}