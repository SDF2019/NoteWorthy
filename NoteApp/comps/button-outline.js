import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class ButtonOutline extends Component {
  render() {
    return (

       
    
          <Button onPress={this.props.press} style={{ margin: 10, color:'red' }} block bordered rounded success>
           
          </Button>
   
    
    );
  }
}


export default ButtonOutline;