import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import './rightCon.less';
import {getData} from '../../api/fenlei';
import action from '../../redux/actions/fenlei';
import {connect} from 'react-redux';
@connect(state=>({...state.fenlei}),action)
@withRouter
export default class RightCon extends React.Component {
    constructor(){
        super();
        this.state = {
            top_img:'',
            title_name:'',
            product_list:[]
        }
    }

    componentDidMount(){
        // let str = this.props.location.pathname;
        // let dataType = str.split("/")[2];
        // getData(dataType).then((res)=>{
        //         this.setState({
        //             top_img:res.data.top_img,
        //             title_name:res.data.title_name,
        //             product_list:res.data.product_list})
        //     })
        this.props.tochangdata('tuijian');
    }
    render() {
        // console.log(this.props.location.pathname);
        console.log(this.props);
        // console.log(1);
        // let {top_img, title_name, product_list} = this.props.val.data;
        return(
            <div className="fenright">
                {this.props.val===undefined?null:<div>
                    <div className="tomImgCon"><img src={this.props.val.top_img}/></div>
                    <div className="cateList">
                        <span className="listTitle">{this.props.val.title_name}</span>
                        <div className="listWrap">
                            <ul>
                                {
                                    this.props.val.product_list.map((item,index)=>{
                                        return (
                                            <li key={index}><a href={"http://m.you.163.com/item/list?categoryId=1043000&subCategoryId=1011003"}><img src={item.imgUrl}/><span>{item.desVal}</span></a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}