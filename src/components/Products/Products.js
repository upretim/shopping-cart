import React, { Component } from 'react';
import Utils from '../../utils/utils';
import './Product.css';

export default class Products extends Component {
    render() {
        console.log('this.props.products', this.props.products);
        const productItems= this.props.products.map((product)=>(
           <div className="col-md-4" key= {product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCart.bind(this, product)}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                        <p>{product.title}</p>
                    </a>
                </div>
                <div>
                <b>{Utils.formatCurrency(product.price)}</b>
                <button className="btn btn-outline-success" onClick={this.props.handleAddToCart.bind(this, product)}>Add To cart</button>
                </div>             
            </div>
        ))
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

