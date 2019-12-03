import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Response extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('response'));
  }
}
