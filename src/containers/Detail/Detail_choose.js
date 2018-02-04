import React,{Component} from 'react';
import './Detail_choose.less';
import {Link} from 'react-router-dom';
import BackToTop from "../../components/BackToTop/BackToTop";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import actions from '../../redux/actions/choose';
import {connect} from 'react-redux';

@connect(state=>(state.choose),actions)
export default class Choose extends Component{
    constructor(){
        super();
        this.state={
            data:{
                id:'1',
                url:'http://yanxuan.nosdn.127.net/a144406aec6ccbe04b0f54d7a93c0dfa.png?quality=90&amp;thumbnail=200x200&amp;imageView',
                price:'759',
                color:['麦黄色','深棕色','纯白色','蓝绿色','白紫色'],
                size:['36','37','38','39','40','41','42']
            },
            number:1,
            much:'',
            color:'',
            only:false
        }
    }

    //数量减少
    reducer=(e)=>{
        if(this.state.number===1) {
            this.setState({only:true});
            setTimeout(()=>{
                this.setState({only:false});
            },1000);
            return;
        }
        this.setState({number:this.state.number-1});
    };

    //数量增加
    plus=()=>{
        this.setState({number:this.state.number+1});
    };

    //选择尺码 颜色
    choose=(e, type)=>{
        if(e.target.tagName!=='SPAN') return;
        let ele = null, key = '';
        if(type === 'a'){
            ele = this.x;
            key = 'much';
        }else{
            ele = this.y;
            key = 'color';
        }
        [].forEach.call(ele.querySelectorAll('span'),(item)=>{
            if(e.target !== item){
                item.classList.remove('active');
            }
        });
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');
            this.setState({[key]:''});
            if(this.state.color===''|| this.state.much===''){
                this.setState({number:1});
            }
        }else{
            e.target.classList.add('active');
            this.setState({[key]:e.target.innerHTML});
        }
    };

    //直接购买  返回
    go=(e,go)=>{
        go = '/Detail';
        e.target.style.backgroundColor = '#c7c7c7';
        setTimeout(()=>{
            if(this.state.much!==''&&this.state.color!==''){
                this.props.toChoose({how:(this.state.much+this.state.color) +'*'+this.state.number});
            }
            this.props.history.push(go);
        },800)
    };


    render(){
        return (
            <div className="choose">
                <DetailHeader/>
                <div className="choose_top clearfix">
                    <div className="imgBox fl">
                        <img src="http://yanxuan.nosdn.127.net/a144406aec6ccbe04b0f54d7a93c0dfa.png?quality=90&amp;thumbnail=200x200&amp;imageView" alt="" />
                    </div>
                    <div className="textContent fl">
                        <h3>价格：¥<i>758</i></h3>
                        <p>已选择：
                            {
                                (this.state.much === '' && this.state.color === '') ? <i className="">请选择规格数量</i> : <i className=""><b>{this.state.much}</b><b>{this.state.color}</b></i>
                            }
                        </p>
                    </div>
                </div>
                <ul className="choose_list">
                    <li style={{display:((this.state.data.size && this.state.data.size.length)?'block':'none')}}>
                        <h3>尺码</h3>
                        <div className="clearfix" onClick={(e)=>{this.choose(e, 'a')}} ref={(x)=>{this.x=x}}>
                            {this.state.data.size && this.state.data.size.map((item,index)=>{
                                return <span key={index}>{item}码</span>
                            })}
                        </div>
                    </li>
                    <li>
                        <h3>颜色</h3>
                        <div className="clearfix" onClick={this.choose} ref={(y)=>{this.y=y}}>
                            {this.state.data.color.map((item,index)=>{
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                    </li>

                </ul>
                <div className="number">
                    <h3>数量</h3>
                    <div className="clearfix">
                        <span className={(this.state.much === '' && this.state.color === '') ? '' : 'on'}
                            onClick={
                                (this.state.much === '' && this.state.color === '') ? null : this.reducer
                            }
                        >-</span>
                        <span className="num">{this.state.number}</span>
                        <span className={(this.state.much === '' && this.state.color === '') ? '' : 'on'}
                            onClick={
                                  (this.state.much === '' && this.state.color === '') ? null : this.plus
                            }
                        >+</span>
                        {this.state.number===1&&this.state.only?<b>本商品一件起售</b>:null}
                    </div>
                </div>
                <div className="choose_bottom clearfix">
                    <a className="go_prev"  onClick={(e)=>{this.go(e,'/Detail')}}>返回</a>
                    <a className="go_buy"  onClick={(e)=>{this.go(e,'/cart')}}>立即购买</a>
                    <Link className="go_car on" to='/cart'>加入购物车</Link>
                </div>
            </div>
        )
    }
}
