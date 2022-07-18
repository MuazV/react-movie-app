
import {getAuth} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJJybz_VV7r-WN2-yH6PEz951Pr09gvqI",
  authDomain: "movie-app-51767.firebaseapp.com",
  projectId: "movie-app-51767",
  storageBucket: "movie-app-51767.appspot.com",
  messagingSenderId: "353027684052",
  appId: "1:353027684052:web:8cab77946f05f09643ad41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;