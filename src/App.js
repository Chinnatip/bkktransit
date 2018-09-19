import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
//
import Map from './Map/components/Map'
import { BTSLocationSet } from './Map/components/assets/BTS_location'

const Popup = styled.div`
  position: fixed;
  bottom: 32px;
  z-index: 2;
  font-size: 18px;
  width: 100%;
  transition: 0.2s;
  span._text {
    background: #26b3fb;
    color: white;
    font-family: 'Sukhumvit Set';
    padding: 7px;
    min-width: 240px;
    display: inline-block;
    line-height: 36px;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popup: false,
      poptext: ''
    }
    this.pushHandler = this.pushHandler.bind(this)
  }
  pushHandler(type, val) {
    if (type == 'show') {
      this.setState({
        popup: true,
        poptext: val
      })
    } else {
      this.setState({
        popup: false,
        poptext: ''
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BKK TRANSIT</h1>
        </header>
        <Map
          location={BTSLocationSet}
          zoom="11"
          height="780"
          markerable
          handler={this.pushHandler}
        />
        {this.state.popup && (
          <Popup>
            <span className="_text">{this.state.poptext}</span>
          </Popup>
        )}
      </div>
    )
  }
}

export default App
