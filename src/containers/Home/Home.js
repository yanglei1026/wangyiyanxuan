import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import "./home.less";
import {ajax} from "../../util/util";
import {toRegister} from "../../api/login"

export default class Home extends Component {

    constructor(){
        super();
        this.state ={ slider:[]}
    }

    componentDidMount(){
        toRegister("yang","123456");

        ajax({
            url:"http://localhost:3000/home/sliders",method:"get"
        }).then((res)=>{
            this.setState({slider:res})
        }).catch((err)=>{
            console.log(err);
        })
    }

    render() {
        // let list = this.state.slider;
        return (
            <div>
                <HomeHeader/>
            </div>
        )
    }
}
