import React, {Component} from "react";
import Tab from "../components/Tab/Tab"
import Transition from 'react-transition-group/Transition';
import "./app.less"

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};

export default class App extends Component {
    constructor(){
        super();
        this.state = { lazyLoad:false }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({lazyLoad:true})
        },200);
    }

    render() {
        return (
            <Transition in={this.state.lazyLoad} timeout={duration}>
                {(state)=>(
                    <div style={{...defaultStyle, ...transitionStyles[state]}} className="app-show">
                        {this.props.children}
                        <Tab></Tab>
                    </div>
                )}
            </Transition>
        )
    }
}
