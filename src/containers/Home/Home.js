import React, {Component} from "react";
import "./home.less";
import HomeDefault from "./HomeDefault";
import {Route} from "react-router-dom";
import HomeChange from "./HomeChange";
import HomeHeader from "./HomeHeader/HomeHeader";

export default class Home extends Component {
     constructor(){
        super();

    }

    render() {
        return (
            <div>
                <HomeHeader/>
                <Route path="/home/" exact component={HomeDefault}/>
                <Route path="/home/:category"  component={HomeChange}/>
            </div>
        )
    }
}