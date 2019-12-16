import React, { Component } from "react";
import "./Hello.css";
class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

class Hello extends React.Component {

    state = {
        [
            {turn : X}
        ]
       
    }
  renderSquare(i) {
    return <Square />;
  }

  render() {
    

    return (
      <div>
        <div className="status">{this.state.props.turn}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Hello;
