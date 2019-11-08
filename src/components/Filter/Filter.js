import React, { Component } from 'react';

export default class Filter extends Component {
   
    render() {
        return (
            <div className="row"> 
                <div className="col-md-4">{this.props.count} products found.</div>
                <div className="col-md-4">
                   <label>
                       Order By
                   <select className="form-control" value={this.props.sort}
                           onChange={this.props.handleChangeSort}>
                        <option value="">Sort</option>
                        <option value="lowestprice">Lowest to highest</option>
                        <option value="highestprice">Highest to lowest</option>
                    </select>
                   </label>
                </div>
                <div className="col-md-4">
                  <label>
                      Size
                  <select className="form-control" onChange={this.props.handleChangeSize}
                          value ={this.props.size}>
                        <option value="">Size</option>
                        <option value="X">X</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                  </label>
                </div>            
            </div>
        )
    }
}
