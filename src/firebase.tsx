import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKxHqBuhQhlHGwGGOGJ5XCjCPW2Ln9ukk',
  authDomain: 'yamoryo-react.firebaseapp.com',
  databaseURL: 'https://yamoryo-react.firebaseio.com',
  projectId: 'yamoryo-react',
  storageBucket: 'yamoryo-react.appspot.com',
  messagingSenderId: '302533906277',
  appId: '1:302533906277:web:4ec3f88f6993e48a7adb8c',
  measurementId: 'G-4937L2FZ6Q',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
