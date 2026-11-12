// js/firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBaCVc_jg9tzGK1KrYLh1EH1HZz4B-84SU",
    authDomain: "gooqle-118a2.firebaseapp.com",
    databaseURL: "https://gooqle-118a2-default-rtdb.firebaseio.com",
    projectId: "gooqle-118a2",
    storageBucket: "gooqle-118a2.firebasestorage.app",
    messagingSenderId: "55671156490",
    appId: "1:55671156490:web:d75fe502267eb961ac94f3",
    measurementId: "G-NTZET7SRMR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();