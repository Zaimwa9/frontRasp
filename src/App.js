import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import _ from 'lodash';

import MyHeader from './components/Header';
import DataDisplay from './containers/DataDisplay';
import Product from './containers/Product';

import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      website: null
    }
  }
/*
  fetchData = () => {
    socket.emit('connect', function () {
      console.log('emitting');
      setTimeout(socket.emit('connect'), 1000);
    })
  }
*/
/*  componentDidMount() {
    socket.on('fetchData', sensor => {
      console.log(sensor)
      this.setState({
        pressure: sensor.pressure,
        humidity: sensor.humidity,
        temperature: sensor.temperature
      })
    })
  }
*/

  componentWillMount() {
    axios({
      url: 'http://raspberrypi:3000/',
      method: 'get'
    })
    .then(result => {
      console.log(result)
      this.setState({
        website: result.data.website
      })
    })
  }

  render() {
    const products = this.state.website ? this.state.website.products : {};

    const productCards =
      _.map(products, product => {
        return (
          <Product
            key={Math.floor(Math.random() * 100)}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        )
      })

    return (
      <div className="App">
        <MyHeader title={this.state.website ? this.state.website.title : ''}/>
        <DataDisplay sensor='temperature' />
        {productCards}
      </div>
    );
  }
}

export default App;
