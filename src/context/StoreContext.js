import React, { Component } from 'react';

let StoreContext;
const { Provider, Consumer } = (StoreContext = React.createContext());

class StoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      product: null,
      handleSelectProduct: this.handleSelectProduct,
      handleToggleCart: this.handleToggleCart
    };
  }

  handleToggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  handleSelectProduct = product => {
    this.setState(product);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { StoreProvider, Consumer as StoreConsumer, StoreContext };
