import React from 'react';
import Swiper from 'swiper';
import "../../../node_modules/swiper/dist/css/swiper.min.css"

export default class DetailBanner extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        let swiper = new Swiper('.swiper-container',{
            autoplay:true,
            loop:true,
            pagination:{
                el:'.swiper-pagination',
                type:'fraction'
            }
        })
    }
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.item.map((cur,index)=>(
                            <div className="swiper-slide" key={index}>
                                <img src={cur} alt=""/>
                                <div className="swiper-pagination"></div>
                            </div>
                    ))}
                </div>

            </div>
        )
    }
}