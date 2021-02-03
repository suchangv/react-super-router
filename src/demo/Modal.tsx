import { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal')!)
  }
}

export default Modal
