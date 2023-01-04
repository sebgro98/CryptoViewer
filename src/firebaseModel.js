// Import the functions you need from the SDKs you need
import firebaseConfig from "/src/firebaseConfig.js";
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import firebase from "firebase/app";





const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const REF="dinnerModel31";
//firebase.database().ref(REF+"/tests").set("dummy");

export {
    db
}
export default app;