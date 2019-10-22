import React, {Component} from 'react';
import './App.css';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
// command to run json server
// json-server public/db.json --port 8000

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      filteredProducts: []
    }
  }

  componentDidMount(){
    this.getDatafromAPI();
  }

  async getDatafromAPI(){
    const response = await fetch('http://localhost:8000/products');
    const myJson = await response.json();
    this.setState({
        products: myJson,
        filteredProducts: myJson
    })
  }

  handleAddToCart(id){
    console.log('Added to cart', id);
  }

  render () {
      return(
        <div className="container">
      <h1>Shopping Cart Applications</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <Filter size={this.state.size} 
                  sort={this.state.sort}
                  handleChangeSize= {this.state.handleChangeSize} 
                  handleChangeSort = {this.state.handleChangeSort}
                  count = {this.state.filteredProducts.length}
                  />
          <Products products={this.state.filteredProducts} 
                    handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
      )
  }
}

export default App;
