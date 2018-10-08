import React, {Component} from 'react';

import { Container, Menu } from 'semantic-ui-react';

class MyHeader extends Component {

  render () {
    return (
      <Container fluid style={{height: '20%', backgroundColor: this.props.color}}>
      <Menu pointing basic inverted color={this.props.color} size='massive'>
          <Menu.Item header>
            {this.props.title}
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}

export default MyHeader;
