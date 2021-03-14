import "./styles.css";
import { Component } from "react";

//não é necessário declarar um construtor com props
//pois essa variável já é associada ao componenete implicitamente
export class Button extends Component {
  render() {
    return (
      <button
        className="button"
        disabled={this.props.disabled}
        onClick={this.props.onclick}
      >
        {this.props.text}
      </button>
    );
  }
}
