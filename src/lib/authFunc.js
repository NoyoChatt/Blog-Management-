import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
        return error;
    }
}