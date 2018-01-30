import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import "./home.less";
import {ajax} from "../../util/util";
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Home extends Component {

    constructor(){
        super();
        this.state ={ slider:[]}
    }

    componentDidMount(){
        // ajax({
        //     url:"http://localhost:3000/sliders",
        //     method:"GET"
        // }).then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })
        ajax({
            url:"http://localhost:3000/home/sliders",method:"get"
        }).then((res)=>{
            console.log(res);
            this.setState({slider:res})
        })
    }

    render() {
        let list = this.state.slider;
        return (
            <div>
                <HomeHeader/>
            </div>
        )
    }
}
