import React from 'react';
import './App.css';
import Testing from './components/Testing.jsx'
import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import Component3 from './components/Component3.jsx'
import { Transition, animated, config } from 'react-spring/renderprops';

class App extends React.Component {
  state = {
    showComponent3:false
  }

  toggle = e =>{
    this.setState({showComponent3:!this.state.showComponent3})
  }


  render() {
    return (
      <div className="App">
        {/* <Testing word={"Hello"}></Testing> */}
        <Component1/>
        <Component2 toggle={this.toggle}/>
        <Transition
          native
          items={this.state.showComponent3}
          from={{
            opacity:0, 
            background:'linear-gradient(to right, #30e8bf, #ff8235)',
            
          }}
          enter={{opacity:1, background:'linear-gradient(to right, #ffffff, #000000)'}}
          leave={{opacity:0}}
          config={config.default}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <Component3/>
            </animated.div>
          ))}

        </Transition>
      </div>
    );
  }
}

export default App;
