import React from 'react'

class Component3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={c3style}>
                <h1>Testing</h1>
            </div>
        )
    }
}

const c3style = {
    background:'steelblue',
    color:'white',
    padding:'1.5rem'
}

export default Component3;