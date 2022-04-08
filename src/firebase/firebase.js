import { auth, db } from "./firebase-config";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
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

const monitorAuthState = async () => {
	onAuthStateChanged(auth, (user) => {
		// login sucessfully
		if (user) {
			//show page
		}

		//login not successful or no user stored
		else {
			//show login form
		}
	});
};

const firebase = {
	signUp,
	loginEmailPassword,
	logout,
	monitorAuthState,
};

export default firebase;
