import React, { Component } from 'react';

class Gif extends Component {
  dynamicSrc = () => {
    if (this.props.id) {
      return `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    }
  }

  handleClick = (event) => {
    this.props.action(this.props.id);
  }

  render() {
    return (
      <img src={this.dynamicSrc()} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
