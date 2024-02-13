import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4UigJjE1LRMCQ-aj2-eYnGJRr9hjuAx8",
  authDomain: "dropbox-app-bc728.firebaseapp.com",
  projectId: "dropbox-app-bc728",
  storageBucket: "dropbox-app-bc728.appspot.com",
  messagingSenderId: "952371932902",
  appId: "1:952371932902:web:8e8d05ab1fc3bb1f7d1527",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
