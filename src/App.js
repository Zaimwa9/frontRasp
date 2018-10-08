import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import _ from 'lodash';

import MyHeader from './components/Header';
import DataDisplay from './containers/DataDisplay';
import Product from './containers/Product';

import { Grid } from 'semantic-ui-react';

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
      url: 'http://raspberrypi.local:3000/',
      method: 'get'
    })
    .then(result => {
      this.setState({
        website: result.data.website
      })
    })
  }

  render() {
    const header = this.state.website ? this.state.website.header : {};
    const products = this.state.website ? this.state.website.products : {};
    var sensors = this.state.website ? this.state.website.sockets : {};

    sensors = _.filter(sensors, sensor => sensor.active === true);
    console.log(sensors)
    const sensorCards =
      _.map(sensors, sensor => {
        return (
          <Grid.Column>
            <DataDisplay
              key={Math.floor(Math.random() * 1000)}
              sensor={sensor.name}
            />
          </Grid.Column>
        )
      });

    const productCards =
      _.map(products, product => {
        return (
          <Grid.Column>
            <Product
              key={Math.floor(Math.random() * 1000)}
              name={product.name}
              price={product.price}
              stock={product.stock}
            />
          </Grid.Column>
        )
      })

    return (
      <div className="App">
        <MyHeader
          title={this.state.website ? header.title : ''}
          color={this.state.website ? header.color : ''}
        />
        <Grid columns={3} style={{marginTop: '20px'}}>
          {sensorCards}
        </Grid>
        <Grid columns={2}>
          {productCards}
        </Grid>
      </div>
    );
  }
}

export default App;
