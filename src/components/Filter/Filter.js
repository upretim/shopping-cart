import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="row"> 
                <div className="col-md-2">({this.props.count}) Products</div>
                <div className="col-md-5">
                    <select>
                        <option>Sort</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                    </select>
                </div>
                <div className="col-md-5">
                  <select>
                        <option>Size</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                    </select>
                </div>            
            </div>
        )
    }
}
