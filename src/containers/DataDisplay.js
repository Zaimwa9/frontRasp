import React, {Component} from 'react';
import openSocket from 'socket.io-client';

import { Item, Segment } from 'semantic-ui-react';

const socket = openSocket('http://raspberrypi.local:3000');

class DataDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    socket.on('fetchData', sensor => {
      this.setState({
        data: sensor[this.props.sensor]
      })
    })
  }

  render () {
    var type = '';
    if (this.props.sensor === 'temperature') {
      type = '°'
    } else if (this.props.sensor === 'pressure') {
      type = ' Pa'
    } else {
      type = ' g/m3'
    }

    return (
      <Segment color='grey'>
        <Item>
          <Item.Header as='h2' content={`${this.props.sensor.substr(0, 1).toUpperCase()}${this.props.sensor.substr(1)}`} />
          <Item.Description>{`${Math.round(this.state.data * 100) / 100}${type}`}</Item.Description>
        </Item>
      </Segment>
    )
  }
}

export default DataDisplay;
