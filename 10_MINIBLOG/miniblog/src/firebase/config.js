import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCS7m-qSCVBTFIhLUSFV_uz1yD5gvVvEJE",
  authDomain: "miniblog-89d1e.firebaseapp.com",
  projectId: "miniblog-89d1e",
  storageBucket: "miniblog-89d1e.firebasestorage.app",
  messagingSenderId: "108810048391",
  appId: "1:108810048391:web:094181f6b3239ea8aaf922"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};