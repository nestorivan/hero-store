import React, { Component } from 'react';
import { getProducts } from '../api/products';

let ProductsContext;
const { Provider, Consumer } = (ProductsContext = React.createContext());

class ProductsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true, error: null });

    getProducts()
      .then(products => this.setState({ products, loading: false }))
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { ProductsProvider, Consumer as ProductsConsumer, ProductsContext };
