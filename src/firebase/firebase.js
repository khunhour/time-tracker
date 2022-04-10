import { auth, db } from "./firebase-config";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const signUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		// added user uid from auth to db
		const userRef = doc(db, "users", userCredential.user.uid);
		const data = [
			{
				workStartTime: "",
				workEndTime: "",
				breakStartTime: "",
				breakEndTime: "",
				totalWorkTime: "",
				totalBreakTime: "",
			},
		];
		await setDoc(userRef, {
			history: data,
		});
		console.log(userCredential.user);
	} catch (error) {
		console.log(error);
		return error.message;
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
		return error.message;
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
