import React from 'react';
import './cunter.less';
export default class Counter extends React.Component {
    constructor() {
        super();
        let time = parseInt(new Date().getTime()/1000)+800000;
        let nowTime =  parseInt(new Date().getTime()/1000);
        let disTime = time-nowTime;
        let hours = parseInt(disTime/ 60 / 60 % 24 ); //计算剩余的小时
        let minutes = parseInt(disTime/ 60 % 60);//计算剩余的分钟
        let seconds = parseInt(disTime  % 60);//计算剩余的秒数
        this.state = {disTime,hours,minutes,seconds};
    }
    componentDidMount(){
        let t= setInterval(()=>{
            if(this.state.disTime===0){
                clearInterval(t);
            }
            let {disTime,hours,minutes,seconds} = this.state;
            disTime--;
            hours = parseInt(disTime / 60 / 60 % 24 , 10); //计算剩余的小时
            minutes = parseInt(disTime  / 60 % 60, 10);//计算剩余的分钟
            seconds = parseInt(disTime  % 60, 10);//计算剩余的秒数
            this.setState({
                disTime
                ,hours,minutes,seconds
            });
            // console.log(this.state.disTime);

        },1000)

    }

    render(){
        // console.log(this.state.hours);
        return <div className='count-title'>
            <div className='count-left'>
                <div className='title'>严选限时购</div>
                <span className='active'>{this.state.hours}</span>
                <span>:</span>
                <span className='active'>{this.state.minutes}</span>
                <span>:</span>
                <span className='active'>{this.state.seconds}</span>
                <i>下一场 18:00 开始</i>
            </div>
            <div className='count-right'>
                {this.props.item.map((item,index)=>(
                    <img key={index} src={item.src} alt=""/>
                ))}
            </div>
            <div className='price'>
                <span>￥50</span>
                <span>￥100</span>
            </div>
        </div>
    }
}

