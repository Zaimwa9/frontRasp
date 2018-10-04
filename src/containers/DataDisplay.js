import React, {Component} from 'react';
import moment from 'moment';
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
    return (
      <Item>
        <Item.Header as='h2' content='Mon component' />
        <Item.Description>{this.state.data}</Item.Description>
      </Item>
    )
  }
}

export default DataDisplay;
