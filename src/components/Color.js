import React, { Component } from "react";

const ColorContext = React.createContext();

export default class ColorProvider extends Component {
  state = {
    color: "lightred"
  };
  render() {
    return (
      <ColorContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

export { ColorContext };
