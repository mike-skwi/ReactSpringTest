import React from 'react'

class Testing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.word}</h1>
            </div>
        )
    }
}

export default Testing;