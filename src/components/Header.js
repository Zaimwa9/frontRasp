import React, {Component} from 'react';

import { Container, Header } from 'semantic-ui-react';

class MyHeader extends Component {

  render () {
    return (
      <Header as='h1'
        style={{backgroundColor: this.props.color}}
        content={this.props.title}
      />
    )
  }
}

export default MyHeader;
