import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2FdQIdeWxBgbL_YUVSIgeCydoiYSIuVE",
  authDomain: "dgmern1.firebaseapp.com",
  projectId: "dgmern1",
  storageBucket: "dgmern1.appspot.com",
  messagingSenderId: "306494837710",
  appId: "1:306494837710:web:ddbe6fab37253a9804d19f",
  measurementId: "G-ZVMNTG7VQ2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)