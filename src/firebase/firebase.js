import { auth, db } from "./firebase-config";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import {
	arrayUnion,
	doc,
	getDoc,
	orderBy,
	query,
	setDoc,
	updateDoc,
} from "firebase/firestore";

const signUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		// added user uid from auth to db
		const userRef = doc(db, "users", userCredential.user.uid);
		const data = [];
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

// adding todays data to database
const addTodayData = async (data) => {
	const user = auth.currentUser;
	if (user) {
		const userRef = doc(db, "users", user.uid);
		await updateDoc(userRef, {
			history: arrayUnion(data),
		});
	} else {
		console.log("No user");
	}
};

const fetchHistory = async () => {
	const user = auth.currentUser;
	if (user) {
		const userRef = doc(db, "users", user.uid);
		const userSnap = await getDoc(userRef);
		const data = userSnap.data();

		// const data = query(userRef, orderBy("startWorkTime"));

		if (!data) return;
		return data.history;
	} else {
		console.log("No user");
	}
};

const firebase = {
	signUp,
	loginEmailPassword,
	logout,
	addTodayData,
	fetchHistory,
};

export default firebase;
