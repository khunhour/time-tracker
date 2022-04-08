import { auth, db } from "./firebase-config";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from "firebase/auth";

const signUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		//do sth
		console.log(userCredential.user);
	} catch (error) {
		console.log(error);
	}
};

const loginEmailPassword = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(userCredential.user);
	} catch (error) {
		console.log(error);
	}
};

const logout = async () => {
	await signOut(auth);
};
