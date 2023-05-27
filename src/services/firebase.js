import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCqVECDnMOfPgFj_mdaL41TXOmxT0V4pi4',
  authDomain: 'emo-nikki.firebaseapp.com',
  projectId: 'emo-nikki',
  storageBucket: 'emo-nikki.appspot.com',
  messagingSenderId: '984292031626',
  appId: '1:984292031626:web:f091eed8aa9c1604a68173',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
