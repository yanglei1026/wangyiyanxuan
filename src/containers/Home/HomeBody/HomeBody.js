import React from 'react';
import './index.less'
import Counter from "./Count/Counter";
import a from '../images/qianbao.png';
import Item from '../../../components/Item/Item'

export default class HomeBody extends React.Component {
    componentDidMount() {
        let newSwiper2 = new Swiper('.swiper2', {
            slidesPerView: 2,
            height: 200
        });
    }

    render() {
        let src1=[{src:a}];
        return (
            <div>
                {/*商品直供*/}
                <div className='shangPingZhiGongWap'>
                    <div className='shangPingZhiGong'>
                        <div className='shangPingZhiGong-header'>
                            <a href=""> <span>品牌制造商直供</span>
                                <i><img src={this.props.itemCo.src} alt=""/></i></a>
                        </div>
                        <div className='shangPingZhiGong-body'>
                            <ul className='shangPingZhiGon'>
                                {this.props.Go.map((item, index) => (
                                    <li key={index}>
                                        <a href="">
                                            <div>
                                                <h4>{item.PinPai}</h4>
                                                <span>{item.Price}</span>
                                                <span>元起</span>
                                            </div>
                                            <img src={item.src} alt=""/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/*周一周四首发*/}
                <div className='shouFa'>
                    <div className='shouFaHeader'>
                    <a href="##">
                        <h4>周一周四 · 新品首发</h4>
                        <div className='chaKan'>
                            <span>查看全部</span><i></i>
                        </div>
                    </a>
                    <i className='sanjiao'></i>
                </div>
                    <div className="swiper-container swiper2" >
                        <ul className="swiper-wrapper ">
                            {this.props.shoufa.map((item,index)=>(
                                <li className="swiper-slide swiper-content" key={index}>
                                    <a href="">
                                        <div className='content-nav'>
                                            <img src={item.src} alt=""/>
                                        </div>
                                        <span className='baobing'>爆品</span>
                                        <div className='name'>{item.name}</div>
                                        <div className='newItemDesc'>{item.newItemDesc}</div>
                                        <div className='dolor'><span>￥</span><span>{item.Price}</span></div>
                                    </a>
                                </li>
                            ))}
                            <li className="swiper-slide">

                            </li>
                        </ul>
                    </div>
                </div>
                <div className='shouFa renqi'>
                    <div className='shouFaHeader'>
                    <a href="##">
                        <h4>人气推荐 · 好物精选</h4>
                        <div className='chaKan'>
                            <span>查看全部</span><i></i>
                        </div>
                    </a>
                    <i className='sanjiao'></i>
                </div>
                    <div className="swiper-container swiper2" >
                        <ul className="swiper-wrapper ">
                            {this.props.shoufa.map((item,index)=>(
                                <li className="swiper-slide swiper-content" key={index}>
                                    <a href="">
                                        <div className='content-nav'>
                                            <img src={item.src} alt=""/>
                                        </div>
                                        <span className='baobing'>爆品</span>
                                        <div className='name'>{item.name}</div>
                                        <div className='newItemDesc'>{item.newItemDesc}</div>
                                        <div className='dolor'><span>￥</span><span>{item.Price}</span></div>
                                    </a>
                                </li>
                            ))}
                            <li className="swiper-slide"></li>
                        </ul>
                    </div>
                </div>

                {/*倒计时*/}
                <Counter item={src1}/>
                {/*列表*/}
              {/*  <Item/>
*/}
            </div>
        )
    }
}

