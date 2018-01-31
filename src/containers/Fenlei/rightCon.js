import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import './rightCon.less';
import Fenlei from '../../../mock/fenlei';
@withRouter
export default class RightCon extends React.Component {


    render() {
        // console.log(this.props);
        let str = this.props.location.pathname;
        str = str.split("/")[2];
        let data = Fenlei[str];
        let {top_img, title_name, product_list} = data;
        return(
            <div className="fenright">
                <div className="tomImgCon"><img src={top_img}/></div>
                <div className="cateList">
                    <span className="listTitle">{title_name}</span>
                    <div className="listWrap">
                        <ul>
                            {
                                product_list.map((item,index)=>{
                                    return (
                                        <li key={index}><a href={"http://m.you.163.com/item/list?categoryId=1043000&subCategoryId=1011003"}><img src={item.imgUrl}/><span>{item.desVal}</span></a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}