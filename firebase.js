// firebase.js  (pure ES module, no <script> tags here)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcspj0dr9gQT_KvGXofCu-FCoFiQrGsK0",
  authDomain: "smart-aroma-mob-app.firebaseapp.com",
  projectId: "smart-aroma-mob-app",
  storageBucket: "smart-aroma-mob-app.appspot.com",
  messagingSenderId: "447169756481",
  appId: "1:447169756481:web:49b4d914f2a0a7c2db75c0",
  measurementId: "G-3K83J97TX2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// expose globally for other pages
window.firebaseAuth = auth;
window.firebaseDB   = db;
