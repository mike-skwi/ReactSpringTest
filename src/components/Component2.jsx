import React from 'react'
import {Spring} from 'react-spring/renderprops';


class Component2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:1000, duration:1000}}
            >
           { props => (
            <div style={props}>
              {/*Put anything you want to animate here */}
               <div style={c2style}>
                   <h1>yooo</h1>
                   <button style={btn} onClick={this.props.toggle}>Toggle Component </button>

               </div>
            </div>
           )}
     
     
         </Spring>
     
    )}       

}

const c2style = {
    background:'slateblue',
    color:'white',
    padding:'1.5rem'
}

const btn ={
    background: '#333',
    color:'#fff',
    padding:'1rem 2rem',
    border:'none',
    textTransform:'uppercase',
    margin:'15px 0'
}


export default Component2;