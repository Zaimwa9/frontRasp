import React, {Component} from 'react';

import { Item, Segment, Button } from 'semantic-ui-react';

class Product extends Component {

  render () {
    return (
      <Segment textAlign='center'>
        <Item>
          <Item.Image size='medium' style={{'marginLeft': 150, 'MarginRight': 'auto'}} src='/favicon.ico' />
          <Item.Header as='h3' content={this.props.name} />
          <Item.Description>{this.props.price}€</Item.Description>
          <Item.Description>{this.props.stock} available</Item.Description>
          <Button basic color='black'>
            Add
          </Button>
        </Item>
      </Segment>
    )
  }
}

export default Product;
