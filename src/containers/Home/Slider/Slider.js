import React from 'react';
import ReactSwipe from 'react-swipe';
import './slider.less';
export default class Slider extends React.Component {
    constructor(){
        super();
        this.state ={index:0}
    }
    render(){
        let opts = {continuous: true,auto:3000,callback:(index)=>{
                this.setState({index})
            }};
        return <div className="home-swiper">
            <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.items.map((item,index)=>(
                    <div key={index}>
                        <a href={item.url}>
                            <img src={item.src}/>
                        </a>
                    </div>
                ))}
            </ReactSwipe>
            <div className="dots">
                {this.props.items.map((item,index)=>(
                    <span key={index} className={this.state.index === index?'active':''}></span>
                ))}
            </div>
            <div className='bianbian'>
                <ul>
                    <li><i><img src={this.props.itemsBg.src}/></i><span>网易自营品牌</span></li>
                    <li><i><img src={this.props.itemsBg.src}/></i><span>30天无忧退货</span></li>
                    <li><i><img src={this.props.itemsBg.src}/></i><span>48小时快速退款</span></li>
                </ul>
            </div>
        </div>
    }
}
