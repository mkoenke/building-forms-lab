// Add BandInput component
import React, { Component } from "react"

class BandInput extends Component {
  state = { name: "" }

  clickHandler = (e) => {
    console.log(e.target.value)
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={this.clickHandler}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
