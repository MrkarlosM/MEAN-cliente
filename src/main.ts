import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnJ1_xWUmRuUYhSC_SJC6HwrceX0ubcj4",
  authDomain: "test-sdk-firebase.firebaseapp.com",
  projectId: "test-sdk-firebase",
  storageBucket: "test-sdk-firebase.appspot.com",
  messagingSenderId: "854864800194",
  appId: "1:854864800194:web:dfde8bed67f6dfe23dce5b",
  measurementId: "G-2Q7HY2LP0C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
