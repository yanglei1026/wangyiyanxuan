import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import './rightCon.less';
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

        this.props.tochangdata('tuijian');
    }
    render() {
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