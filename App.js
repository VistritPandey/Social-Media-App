import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDhwFSzkpCvfH0xKbu2IiXac9RDGpol48M",
  authDomain: "vistrit-social-media.firebaseapp.com",
  databaseURL: "https://vistrit-social-media.firebaseio.com",
  projectId: "vistrit-social-media",
  storageBucket: "vistrit-social-media.appspot.com",
  messagingSenderId: "750769301154",
  appId: "1:750769301154:web:20622c5d64581bf7ebd9fb",
  measurementId: "G-PZFVCQVSXS"
};

firebase.initializeApp(firebaseConfig);

