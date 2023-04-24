import React, { Component } from 'react'

export class App extends Component {
  constructor (props) {
    super(props)
    console.log('lode constuctor')
    this.state = {
      count: 0,
    }
  }

  componnentWillMount() {
    console.log('Lode componnentWillMount')
  }

  componentDidMount () {
    console.log('Load componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('Load shouldComponentUpdate')
    return true
  }

  render() {
    console.log('lode rander')
    return (
      <>
      <h1>Number is:  {this.state.count} </h1>
      <button type='button' onClick={() => this.setState({count: this.state.count + 1})}>Count {this.state.count}</button>
      <button type='button' onClick={() => this.setState({count: 0 })}>Set zero</button>
      </>
      
    )
  }
}


export default App