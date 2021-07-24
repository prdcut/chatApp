import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      backgroundColor: '#757083'
    }
  }

  render() {
    let { backgroundColor } = this.state

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <ImageBackground
            style={styles.imgBackground}
            source={require('../assets/Background-Image.png')}
          >
            <View style={styles.main}>
              <Text style={styles.title}>Go Chat!</Text>
            </View>

            <View style={styles.chatOptions}>
              <TextInput
                style={styles.nameInput}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder='Enter Your Username'
              />
              <View style={styles.box}>
                <Text
                  style={styles.backgroundColorText}>
                  Choose a Background Color
                </Text>
                <View style={styles.backgroundColor}>
                  <TouchableOpacity
                    style={styles.backgroundColor1}
                    onPress={() => this.setState({ backgroundColor: '#090C08' })}
                  />
                  <TouchableOpacity
                    style={styles.backgroundColor2}
                    onPress={() => this.setState({ backgroundColor: '#474056' })}
                  />
                  <TouchableOpacity
                    style={styles.backgroundColor3}
                    onPress={() => this.setState({ backgroundColor: '#8A95A5' })}
                  />
                  <TouchableOpacity
                    style={styles.backgroundColor4}
                    onPress={() => this.setState({ backgroundColor: '#B9C6AE' })}
                  />
                </View>
              </View>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Enter to chat"
                accessibilityHint="Username and profile picture will be displayed"
                accessibilityRole="button"
                style={{ backgroundColor: backgroundColor, height: 60, }}
                onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, backgroundColor: this.state.backgroundColor })}
              >
                <Text style={styles.startText}>Start Chatting!</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    top: 30,
    height: 50,
  },
  main: {
    flex: 0.50,
  },
  chatOptions: {
    flex: 0.40,
    backgroundColor: 'white',
    width: '88%',
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  nameInput: {
    height: 60,
    borderWidth: 1,
    borderColor: '#757083',
    borderRadius: 2,
    fontSize: 16,
    fontWeight: "300",
    color: '#757083',
    paddingLeft: '3%',
  },
  backgroundColorText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#757083',
    marginBottom: 10,
    justifyContent: 'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center'
  },

  startText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 60,
  },
  box: {
    flexDirection: 'column'
  },
  backgroundColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundColor1: {
    backgroundColor: '#090C08',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  backgroundColor2: {
    backgroundColor: '#474056',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  backgroundColor3: {
    backgroundColor: '#8A95A5',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  backgroundColor4: {
    backgroundColor: '#B9C6AE',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
})