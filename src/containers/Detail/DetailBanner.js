import React from 'react';

export default class DetailBanner extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        let a = new Swiper('.detail-swiper .xiaohong',{
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
            <div className="detail-swiper">
                <div className="swiper-container xiaohong">
                    <div className="swiper-wrapper">
                        {this.props.item.map((cur,index)=>(
                            <div className="swiper-slide" key={index}>
                                <img src={cur}/>
                                <div className="swiper-pagination"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}