
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-fg6OjiInXJBZJwfPF7iJ-6ZY6_CzSxY",
  authDomain: "nuvioncloud.firebaseapp.com",
  projectId: "nuvioncloud",
  storageBucket: "nuvioncloud.firebasestorage.app",
  messagingSenderId: "238265616692",
  appId: "1:238265616692:web:88d6c38c8443169ffd7d61"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
