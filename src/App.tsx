import React, { useState } from "react";
import Buttons from "./component/Buttons";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Today from "./component/Today";
import firebase from "./firebase/firebase";
import Main from "./component/Main";

const App: React.FC = () => {
	const [startWork, setStartWork] = useState<boolean>(false);
	const [startBreak, setStartBreak] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [formType, setFormType] = useState<string>("login");
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === "email") {
			setEmail(e.target.value);
		} else if (e.target.id === "password") {
			setPassword(e.target.value);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (e.currentTarget.id === "login") {
			let result = await firebase.loginEmailPassword(email, password);
			if (result) {
				setError(result);
			} else {
				setIsLoggedIn(true);
				clearForm();
			}
		} else if (e.currentTarget.id === "signup") {
			let result = await firebase.signUp(email, password);
			if (result) {
				setError(result);
			} else {
				setIsLoggedIn(true);
				clearForm();
			}
		}
	};

	const clearForm = () => {
		setError("");
		setEmail("");
		setPassword("");
	};

	const handleLogout = () => {
		firebase.logout();
		setIsLoggedIn(false);
	};
	const handleChangeFormType = (e: React.MouseEvent<HTMLButtonElement>) => {
		setFormType(e.currentTarget.value);
	};

	const handleWorkButton = () => {
		setStartWork(!startWork);
	};

	const handleBreakButton = () => {
		setStartBreak(!startBreak);
	};
	return (
		<div>
			<Navbar
				isLoggedIn={isLoggedIn}
				handleChangeFormType={handleChangeFormType}
			/>
			<Main
				startWork={startWork}
				startBreak={startBreak}
				handleWorkButton={handleWorkButton}
				handleBreakButton={handleBreakButton}
			/>
			{/* <Today /> */}
			{/* <Form
				type={formType}
				email={email}
				password={password}
				error={error}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/> */}
		</div>
	);
};

export default App;
