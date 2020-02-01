import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    produtcs: [],
    detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalDismiss: true,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  }
  componentDidMount() {
    this.setProducts()
  }
  setProducts = () => {
    let copy_storeProducts = []
    storeProducts.forEach(item => {
      const storeItem = {...item}
      copy_storeProducts = [...copy_storeProducts, storeItem]
    })
    this.setState({
      produtcs: copy_storeProducts
    })
  }
  
  getItem = id => {
    const product = this.state.produtcs.find(item => item.id === id)
    return product
  }
  
  detailHandle = (id) => {
    const product = this.getItem(id)
    this.setState({
      detailProduct: product
    })
  } 

  addCartHandle = (id) => {
    let tmepProducts = [...this.state.produtcs];
    const index = tmepProducts.indexOf(this.getItem(id));
    const product = tmepProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;  
    this.setState({
      produtcs: tmepProducts,
      cart: [...this.state.cart, product],
    }, () => this.calculateTotal())
  } 

  removeItems = (id) => {
    const tempCart = [...this.state.cart];
    const removeId = this.getItem(id);
    const remainCart = tempCart.filter(item => item.id !== removeId.id);
    removeId.inCart = false;
    removeId.count = 0;
    removeId.total = 0;
    this.setState({
      cart: remainCart,
    }, () => this.calculateTotal())
  }
  inputChange = (id, val) => {
    const tempCart = [...this.state.cart];
    const targetProduct = this.getItem(id);
    targetProduct.count = Number(val);
    targetProduct.total = targetProduct.count * targetProduct.price;
    const findItem = tempCart.find(item => item.id === targetProduct.id);
    const index = tempCart[findItem.id];
    tempCart[index] = tempCart[findItem];
    this.setState({
      cart: tempCart
    }, () => this.calculateTotal())
  }
  incrementItems = (id) => {
    const tempCart = [...this.state.cart];
    const targetProduct = this.getItem(id);
    targetProduct.count += 1;
    targetProduct.total = targetProduct.count * targetProduct.price;
    const findItem = tempCart.find(item => item.id === targetProduct.id);
    const index = tempCart[findItem.id];
    tempCart[index] = tempCart[findItem];
    this.setState({
      cart: tempCart
    }, () => this.calculateTotal())
  }
  decrementItems = (id) => {
    const tempCart = [...this.state.cart];
    const targetProduct = this.getItem(id);
    if (targetProduct.count <= 1) {
      return false;
    }
    targetProduct.count -= 1;
    targetProduct.total = targetProduct.count * targetProduct.price;
    const findItem = tempCart.find(item => item.id === targetProduct.id);
    const index = tempCart[findItem.id];
    tempCart[index] = tempCart[findItem];
    this.setState({
      cart: tempCart
    }, () => this.calculateTotal())
  }
  clearCart = () => {
    this.setState({
      cart: []
    }, () => {
      this.setProducts(); 
      this.calculateTotal();
    })
  }

  calculateTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => subTotal += item.total);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      modalDismiss: false
    })
  }
  
  closeModal = () => {
    this.setState({
      modalDismiss: true
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        detailHandle: this.detailHandle,
        addCartHandle: this.addCartHandle,
        removeItems: this.removeItems,
        incrementItems: this.incrementItems,
        decrementItems: this.decrementItems,
        inputChange: this.inputChange,
        clearCart: this.clearCart,
        openModal: this.openModal,
        closeModal: this.closeModal
       }}>
        {this.props.children}
      </ProductContext.Provider>
      )
    }
  }
  
const ProductConsummer =  ProductContext.Consumer;

export { ProductProvider, ProductConsummer }

