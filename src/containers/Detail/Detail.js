import React, {Component} from "react";
import {getData} from "../../api/fenlei"
import {connect} from "react-redux";
import actions from "../../redux/actions/fenlei"


@connect(state => ({...state.fenlei}), actions)
export default class Detail extends Component {
    componentDidMount() {
        this.props.getFenlei("tuijian");
    }

    render() {
        return (<div>111</div>)
    }
}

