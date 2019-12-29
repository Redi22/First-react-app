import React from "react";
import "./Hello.css";
class Square extends React.Component {
  constructor(){
    super()
    this.state = {
      value : ""
    }
    this.onBoxClicked = this.onBoxClicked.bind(this)
  }
  onBoxClicked(){
    this.setState({value : this.props.turn})
    this.props.onBoxClicked()
  }
  render() {
  return <button className="square" onClick={()=>this.onBoxClicked()}>{this.state.value}</button>;
  }
}

class Board extends React.Component {

  constructor(){
    super()
    this.state = {
      turn: "X"
    }
    this.onBoxClicked = this.onBoxClicked.bind(this)
  }
  onBoxClicked(){
    if (this.state.turn == "X") {
      this.setState({
        turn: "O"
      })
    }
    else {
      this.setState({turn: "X"})
    }
  }

  renderSquare(i) {
    return <Square value={i} turn={this.state.turn} onBoxClicked={this.onBoxClicked}/>;
  }

  render() {
    

    return (
      <div>
        <div className="status">{this.state.turn}</div>
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
export default Board;
