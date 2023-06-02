// Write your code here
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {text: 'Light Mode'}
  onPress = () => {
    this.setState(prev => {
      return {text: 'Dark Mode'}
    })
  }
  render() {
    const {text} = this.state
    return (
      <div>
        <h1>Click to change content</h1>
        <button onClick={this.onPress}>{text}</button>
      </div>
    )
  }
}

export default LightDarkMode
