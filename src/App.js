import React, {Component} from 'react';
import './App.css';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Basket from './components/Basket/Basket';
// command to run json server
// json-server public/db.json --port 8000

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      filteredProducts: [],
      sort: '',
      size:'',
      cartItems: []
    }
  }
  sortedProducts = [];

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

  handleChangeSort=(event)=>{
    this.setState({
      sort: event.target.value
    }, this.sortProducts)
  }

  /*sortProducts = () => {
    const { sort, filteredProducts,  products} = this.state;
    switch (sort) {
      case 'lowest':
        products.sort((a,b)=> a.price - b.price);     
        break;
      case 'highest':
        products.sort((a,b)=> b.price - a.price);
        break;  
      default:
        break;  
    }
    this.setState({
      filteredProducts: products
    })
  }; */

  sortProducts = () => {
    this.setState(state => {     
      if (state.sort !== '') {
         state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else{
         state.products.sort((a, b)=> (a.id > b.id) ? 1 : -1);
      }
      if (state.size !== '') {
        return { filteredProducts:state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)};
      }
      return { filteredProducts: state.products };
    })
  }
 

  handleChangeSize = (event)=>{
    this.setState({
       size:event.target.value
    }, this.filterProductsBySize)
  }

  filterProductsBySize = ()=>{
    const {size, filteredProducts} = this.state;
    if(size!==""){
     var filterPro = filteredProducts.filter((item)=>{
       console.log('found or not ', item.availableSizes.indexOf(size));
        return item.availableSizes.indexOf(size);
      });
      console.log('filtered products by size ', filterPro);
      this.setState({
        filteredProducts: filterPro
      })
    }
  }

  removeItem = (id)=>{
    console.log('Remove Item Clicked');
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
                  handleChangeSize= {this.handleChangeSize} 
                  handleChangeSort = {this.handleChangeSort}
                  count = {this.state.filteredProducts.length}
                  />
          <Products products={this.state.filteredProducts} 
                    handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-md-4">
          <Basket cartItems={this.state.cartItems} removeItemHandler={this.removeItem.bind(this)}/>
        </div>
      </div>
    </div>
      )
  }
}

export default App;
