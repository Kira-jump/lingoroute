import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAwIbVmvEZl6QPtRHxKaG_ynIuy7aXED5w",
  authDomain: "english-quest-7df93.firebaseapp.com",
  projectId: "english-quest-7df93",
  storageBucket: "english-quest-7df93.firebasestorage.app",
  messagingSenderId: "346156771393",
  appId: "1:346156771393:web:dd98b78d47fa2765a4fec0"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
