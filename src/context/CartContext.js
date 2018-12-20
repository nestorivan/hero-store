import React, { Component } from 'react';

let CartContext;
const { Provider, Consumer } = (CartContext = React.createContext());

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      handleAddItem: this.handleAddItem,
      handleRemoveItem: this.handleRemoveItem
    };
  }

  handleAddItem = id => {
    let { items } = this.state;
    items[id] = items[id] ? items[id] + 1 : 1;

    this.setState({ ...this.state, ...items });
  };

  handleRemoveItem = id => {
    let { items } = this.state;
    delete items[id] ;

    this.setState({ ...this.state, ...items });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { CartProvider, Consumer as CartConsumer, CartContext };
