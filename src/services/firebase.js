import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwPEyn6hxB1wlid8reVQuYuLDouuj210I",
  authDomain: "lingoroute-d0c1a.firebaseapp.com",
  projectId: "lingoroute-d0c1a",
  storageBucket: "lingoroute-d0c1a.firebasestorage.app",
  messagingSenderId: "257932680256",
  appId: "1:257932680256:web:ab66c172c31e6344eed3a5"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
