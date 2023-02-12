import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const firebaseConfig = {
            apiKey: "AIzaSyDX5IeydGnq3SlYvaT3lh7xRYnOY-BOxlw",
        authDomain: "reajtentrega.firebaseapp.com",
        projectId: "reajtentrega",
        storageBucket: "reajtentrega.appspot.com",
        messagingSenderId: "556778883352",
        appId: "1:556778883352:web:16957ca16ce747ab99766d"
};
const app = initializeApp(firebaseConfig);

