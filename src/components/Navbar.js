import React, { Component } from 'react'
class Navbar extends Component {

  render() {
    return (
      <nav>
        <h1>
          DApp Token Farm
        </h1>
        <span>
          {this.props.account.substring(0, 10)}...
        </span>
      </nav>
    );
  }
}

export default Navbar;
