const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const createNewUser = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user.uid;
};

const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.uid;
};

module.exports = {
    createNewUser,
    login
};