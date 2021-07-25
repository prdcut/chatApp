import React, { useImperativeHandle } from 'react';
import { View, Text, Button, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';


const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    const firebaseConfig = {
      apiKey: "AIzaSyAGC6cHOmdLbMYe9CO6fUiQd0jyCuBoxsk",
      authDomain: "chatapp-d5204.firebaseapp.com",
      projectId: "chatapp-d5204",
      storageBucket: "chatapp-d5204.appspot.com",
      messagingSenderId: "179293057840",
      appId: "1:179293057840:web:ebd01617af216941e74ef5"
    };
    //connect to firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    };
    //refference the collection in firebase
    this.referenceChatMessages = firebase.firestore().collection("messages");
    this.state = {
      messages: [],
    };
  }

  //fetch and displpay messages
  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  //adds messages to cloud storage
  addMessage() {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      _id: message._id,
      createdAt: message.createdAt,
      text: message.text,
      user: message.user,
    });
  }

  //updates messages
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages,
    });
  }

  //event handler for sending messages
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
      () => {
        this.addMessage();
      }
    );
  }

  //change bubble color
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#464646",
          },
        }}
      />
    );
  }

  //renders chat bubble
  render() {
    //access the users name
    let { name, backgroundColor } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });
    //displays the selected backgriund color
    let textColor = 'black';
    if (backgroundColor === '#090C08' || backgroundColor === '#474056') {
      textColor = 'white'
    }

    return (
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{ _id: 1 }}
        />
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
        }
      </View>
    )
  }
}