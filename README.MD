# chat-app
The main idea is to build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.

# Key Features
- A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
-  The chat must provide users with two additional communication features: sending images
and location data.
- Data is stored on the client-side and available when the user is offline.

# Technologies
- React Native
- Expo
- Google Firestore Database
- Gifted Chat

# Getting Started

### What you need
- Node.js
- Expo Command Line Interface
```
npm install expo-cli --global
```
- Expo account
- To run the app on your mobile device: the Expo mobile app from your device's app store
- To run the app on your machine via a simulator/emulator: 
     - [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/)
     - [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/) (MacOS only)

# Setup
Start by downloading/cloning this repository
Install dependencies in the project's root directory
```
npm install
```
To start the project, run the following in your terminal:
```
expo start
```

### Running on Mobile Device
After starting the app, use your mobile to scan the QR code with the Expo app (Android) or the device's camera (iOS). Alternatively, click on 'Send link with email' in the Expo Developer Tools that opens automatically in the browser.

### Running on Simulator/Emulator
After starting the app, type 'a' in your CLI to run the app on an Android emulator, and 'i' to run it on an iOS simulator. Alternatively, click the appropriate option in the Expo Developer Tools in the browser.