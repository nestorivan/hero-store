import React, { Component } from 'react';

let CartContext;
const { Provider, Consumer } = (CartContext = React.createContext());

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleAddItem = id => {
    this.state[id]
      ? this.setState(state => ({ [id]: state[id] + 1 }))
      : this.setState({ [id]: 1 });
  };

  handleRemoveItem = id => {
    const { item, ...state } = this.state;
    this.setState({ state });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { CartProvider, Consumer as ProductsConsumer, CartContext };
