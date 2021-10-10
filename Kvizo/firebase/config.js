import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5pYACp8GRHGZe-Y6vvRbDliHEOTegVkM',
  authDomain: 'kvizo-3761c.firebaseapp.com',
  databaseURL: 'https://kvizo-3761c-default-rtdb.firebaseio.com',
  projectId: 'kvizo-3761c',
  storageBucket: 'kvizo-3761c.appspot.com',
  messagingSenderId: '896011366186',
  appId: '1:896011366186:android:97dd4d69320caa261b7853',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
