import React, { Component } from 'react'

class Basket extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                Basket is empty.
            </div>
        )
    }
}

export default Basket;