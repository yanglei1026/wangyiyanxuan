import React, {Component} from "react";
import "./home.less";
import HomeHeader from "./HomeHeader/HomeHeader";
import Slider from "./Slider/Slider";
import shouFa1 from './images/shouFa01.png'
import shouFa2 from './images/shouFa02.png'
import shouFa3 from './images/shouFa03.png'
import shouFa4 from './images/shouFa04.png'
import shouFa5 from './images/shouFa05.png';
import './home.less'
import HomeBody from "./HomeBody/HomeBody";
/*列表*/
import {WhiteSpace,Flex,WingBlank} from "antd-mobile"
import Item from "../../components/Item/Item";
import BackToTop from "../../components/BackToTop/BackToTop";
let items = [{src:"http://yanxuan.nosdn.127.net/5c71d542850d5c0aa5a1591ce697bdb5.jpg?imageView&thumbnail=750x0&quality=75"},{src:"http://yanxuan.nosdn.127.net/1aa40d70966f2f512f6976fb7431fa0b.jpg?imageView&thumbnail=750x0&quality=75"},{src:"http://yanxuan.nosdn.127.net/890ed24c6c9ee5248ce80daed8e1109a.jpg?imageView&thumbnail=750x0&quality=75"},{src:"http://yanxuan.nosdn.127.net/50ddf56e7160da81638128c8b8883dc2.jpg?imageView&thumbnail=750x0&quality=75"},{src:"http://yanxuan.nosdn.127.net/e5891a68df93c5ee57ddb5b256068dac.jpg?imageView&thumbnail=750x0&quality=75"}];
let itemsBg={src:"http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png"};
let itemCo={src:"//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png"};
let  Go=[
       {src:"http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png?imageView&thumbnail=355x0&quality=65",PinPai:"Adidas制造商",Price:"35"},
       {src:"http://yanxuan.nosdn.127.net/1a11408a40798e6574df29675a22664a.png?imageView&thumbnail=355x0&quality=65",PinPai:"Adidas制造商",Price:"35"},
       {src:"http://yanxuan.nosdn.127.net/4bdc2ae0a30c4a10ea95876a67c695bc.png?imageView&thumbnail=355x0&quality=65",PinPai:"Adidas制造商",Price:"35"},
       {src:"http://yanxuan.nosdn.127.net/658009bf4e1d5288242642277aaab767.jpg?imageView&thumbnail=355x0&quality=65",PinPai:"Adidas制造商",Price:"35"}
       ];
let shoufa=[
    {src:shouFa1,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa2,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa3,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa4,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa5,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},{src:shouFa1,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa2,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa3,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa4,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
    {src:shouFa5,name:"日本AKOYA天然海水珍珠18K金项链",Price:"35",newItemDesc:"GGC专业认证，日本顶级花珠"},
]

function changeTop(flag){
    window.onscroll = ()=>{
        let scrT = document.documentElement.scrollTop;
        let winH = document.documentElement.clientHeight;
        if(scrT > winH){
            this.setState({isShow:!flag});
        }else{
            this.setState({isShow:flag});
        }
    }
}

export default class Home extends Component {
     constructor(){
        super();
        this.state={isShow:false}
    }
    componentDidMount(){
        changeTop.call(this,this.state.isShow);
    }

    render() {
        // let list = this.state.slider;
        return (
            <div className="home-container">
                <HomeHeader/>
                <Slider items={items} itemsBg={itemsBg}/>
                <HomeBody itemCo={itemCo} Go={Go} shoufa={shoufa}/>
                <div className="product-list">
                    <WingBlank>
                        <ul>
                            <Flex>
                                <Flex.Item><Item/></Flex.Item>
                                <Flex.Item><Item/></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><Item/></Flex.Item>
                                <Flex.Item><Item/></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><Item/></Flex.Item>
                                <Flex.Item><Item/></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><Item/></Flex.Item>
                                <Flex.Item><Item/></Flex.Item>
                            </Flex>
                        </ul>
                    </WingBlank>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                </div>
                <div>
                    {this.state.isShow?<BackToTop/>:''}
                </div>
            </div>
        )
    }
}