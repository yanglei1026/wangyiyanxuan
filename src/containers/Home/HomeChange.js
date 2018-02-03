import React,{Component} from "react";
import "./home-change.less";
import {connect} from "react-redux";
import actions from "../../redux/actions/home";
import {WhiteSpace,Flex,WingBlank} from "antd-mobile"
import Item from "../../components/Item/Item";
import "./inline.less"

@connect(state=>({...state.home}),actions)
export default class HomeChange extends  Component{
    componentDidMount() {
        this.props.getHomeData("jujia");
        this.setState({data:this.props.data});
    }

    render() {
        let data = this.props.data;
        // err: 0, data: {…}, hasMore: true, msg: "数据请求成功"
        // data = data.data;  // data 是
        // data === undefined? data =  this.state.data: data =  data.data;  // data 是
        data===undefined? data={}:null;
        let list = data.product_lists;
        list===undefined? list =[]: null;
        return (
            <div className="product-list">
                <img src={data.top_img} className='top-img'/>
                <div className="content-title">
                    <p className="name">{data.titlename}</p>
                    <p className="info">{data.info}</p>
                </div>
                <WingBlank size="md">
                    <ul>
                        <Flex wrap="wrap">
                            {list.map((item,index)=>{
                               return  (<Item key={index} item={item} className="inline"/>)
                            })}
                        </Flex>
                    </ul>
                </WingBlank>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
            </div>
        )
    }
}
