import React from 'react'
import {Spring} from 'react-spring/renderprops';
import { tsConstructorType } from '@babel/types';


class Component1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            number:0
        }
        this.testChange = this.testChange.bind(this);
    }
    testChange(e){
        {this.setState({number:Math.round(this.props.number)})}
    }

    render(){
        return (
            <Spring
            from={{opacity:0, marginTop:-500}}
            to={{opacity:1, marginTop:0}}
            >
            { props => (
            <div style={props}>
            {/*Put anything you want to animate here */}
                <div style={c1style}>
                    <h1>hyello</h1>
                    <Spring
                        from={{number:0}}
                        to={{number:20}}
                        config={{delay:1000, duration:10000}}
                    >
                        {props=>(
                            <div style={props}>
                                <h1 onAnimationIterationCapture={this.testChange} style={counter}>
                                    {props.number.toFixed()}
                                </h1>
                            </div>
                        )}
                    </Spring>
                </div>
    
            </div>
            )}
    
    
        </Spring>
    
    );}

}
const c1style = {
    background:'steelblue',
    color:'white',
    padding:'1.5rem'
}

const counter={
    background:'#333',
    textAlign:'center',
    width:'100px',
    borderRadius:'50%',
    margin:'1rem auto'
}

export default Component1;