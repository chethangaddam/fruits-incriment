// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  onBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="main-bg">
        <div className="fruits-card">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
            alt="banana"
            className="image"
          />
          <div>
            <button type="button" onClick={this.onMango}>
              Eat Mango
            </button>
            <button type="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
