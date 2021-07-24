
import React from 'react';
import { View, Text } from 'react-native';

export default class Chat extends React.Component {
  render() {
    let { name, backgroundColor } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    let textColor = 'black';
    if (backgroundColor === '#090C08' || backgroundColor === '#474056') {
      textColor = 'white'
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor }}>
        <Text style={{ color: textColor }}>
          You may chat here!
        </Text>
      </View>
    )
  }
}
