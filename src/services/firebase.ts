import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBO0dl4o15WtR2L-4wIZoANlY47APMl0Jc',
  databaseURL: 'https://tedb-dev-498b3.firebaseio.com',
  projectId: 'tedb-dev-498b3',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const db = firebase.database();
