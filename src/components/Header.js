import React, {Component} from 'react';

import { Container, Header } from 'semantic-ui-react';

class MyHeader extends Component {

  render () {
    return (
      <Header as='h1' content={this.props.title} />
    )
  }
}

export default MyHeader;
