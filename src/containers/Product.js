import React, { Component } from 'react';

import { Item, Segment, Button, Grid } from 'semantic-ui-react';

class Product extends Component {

  render () {
    return (
      <Segment textAlign='center'>
        <Item>
          <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={16}>
              <Item.Header as='h3' content={`${this.props.name.substr(0, 1).toUpperCase()}${this.props.name.substr(1)}`} style={{marginTop: '1em'}}/>
              <Item.Image size='small' style={{'marginLeft': 'auto', 'MarginRight': 'auto'}} src='http://raspberrypi.local:3000/assets/placeholder.png' />
              <Item.Description style={{marginTop: '1em', fontSize: '24px'}}>{this.props.price} €</Item.Description>
              <Item.Description style={{marginTop: '1em', fontSize: '18px'}}>{this.props.stock} available</Item.Description>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={15}>
                <Button size='large' basic color='black' floated='right'>
                  Buy
                </Button>
              </Grid.Column>
          </Grid.Row>
          </Grid>
        </Item>
      </Segment>
    )
  }
}

export default Product;
