  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQ_vHfZ07HbDAjtkaXcUhHwPLBli2oRI8",
    authDomain: "fir-autentication-b5c4c.firebaseapp.com",
    projectId: "fir-autentication-b5c4c",
    storageBucket: "fir-autentication-b5c4c.appspot.com",
    messagingSenderId: "940540750002",
    appId: "1:940540750002:web:e100a1d40fea46b90801ab",
    measurementId: "G-ZMR09YZVRN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  console.log(auth);

  console.log(app);