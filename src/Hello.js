import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        };
    }

    render() {
        return <h1 className='box'>{this.state.message}</h1>;
    }
}

export default Hello;
