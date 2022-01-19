import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtJfpgDqptZwgxBfTHQXdpSK2t66EjX4k",
  authDomain: "auth-development-7c37d.firebaseapp.com",
  projectId: "auth-development-7c37d",
  storageBucket: "auth-development-7c37d.appspot.com",
  messagingSenderId: "772873561014",
  appId: "1:772873561014:web:2ee6bc781e84fbb5665717"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;
