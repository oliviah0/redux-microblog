import React, { Component } from 'react'

export default class Comment extends Component {
  handleRemove = () => {
    this.props.removeComment(this.props.id)
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleRemove}className='btn btn-default'>
          <i className="text-danger fas fa-minus-circle"></i> 
        </button>
        {this.props.text}
      </div>
    )
  }
}
