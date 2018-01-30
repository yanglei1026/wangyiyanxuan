import React,{Component} from 'react';
export default class Choose extends Component{
    render(){
        return (
            <div>
                <div className="choose_top">
                    <img src="" alt="" />
                    <div>
                        <p>价格：¥</p>
                        <p>请选择规格数量</p>
                    </div>
                </div>
                <ul className="choose_list">
                    <h3>颜色</h3>
                    <div>
                        <span></span>
                    </div>
                </ul>
            </div>
        )
    }
}
