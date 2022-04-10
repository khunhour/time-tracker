import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import firebase from "./firebase/firebase";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import History from "./component/History";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase-config";

const App: React.FC = () => {
	const [startWork, setStartWork] = useState<boolean>(false);
	const [startBreak, setStartBreak] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [formType, setFormType] = useState<string>("login");
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
	const [todayData, setTodayData] = useState({
		workStartTime: 0,
		workEndTime: 0,
		breakStartTime: 0,
		breakEndTime: 0,
		totalWorkTime: 0,
		totalBreakTime: 0,
	});
	const navigate = useNavigate();

	useEffect(() => {
		const monitorAuthState = onAuthStateChanged(auth, (user) => {
			// login sucessfully
			if (user) {
				navigate("/dashboard");
				setIsLoggedIn(true);
			}
			//no user or logged out
			else {
				navigate("/");
				setIsLoggedIn(false);
			}
		});
		return () => {
			monitorAuthState();
		};
	}, [isLoggedIn]);

	useEffect(() => {
		if (todayData.workEndTime) {
			firebase.addTodayData(todayData);
			resetUserData();
		}
	});

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
				clearForm();
			}
		} else if (e.currentTarget.id === "signup") {
			let result = await firebase.signUp(email, password);
			if (result) {
				setError(result);
			} else {
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
		navigate("/");
		setFormType(e.currentTarget.value);
	};

	const handleWorkButton = async () => {
		if (!startWork) {
			// started work
			setTodayData((prevData) => ({
				...prevData,
				workStartTime: Date.now(),
			}));
		} else {
			// ended work -> update state
			let total = Date.now() - todayData.workStartTime;
			setTodayData((prevData) => ({
				...prevData,
				workEndTime: Date.now(),
				totalWorkTime: total,
			}));
			// update database
		}
		setStartWork(!startWork);
	};

	const handleBreakButton = () => {
		if (!startBreak) {
			// started break -> update state
			setTodayData((prevData) => ({
				...prevData,
				breakStartTime: Date.now(),
			}));
		} else {
			// ended break
			let total = Date.now() - todayData.breakStartTime;
			setTodayData((prevData) => ({
				...prevData,
				breakEndTime: Date.now(),
				totalBreakTime: total,
			}));
		}
		setStartBreak(!startBreak);
	};

	const resetUserData = () => {
		const data = {
			workStartTime: 0,
			workEndTime: 0,
			breakStartTime: 0,
			breakEndTime: 0,
			totalWorkTime: 0,
			totalBreakTime: 0,
		};
		setTodayData({ ...data });
	};
	return (
		<>
			<Navbar
				isLoggedIn={isLoggedIn}
				handleLogout={handleLogout}
				handleChangeFormType={handleChangeFormType}
			/>
			<Routes>
				{/* <Today /> */}
				<Route
					path="/"
					element={
						<Form
							type={formType}
							email={email}
							password={password}
							error={error}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<Dashboard
							startWork={startWork}
							startBreak={startBreak}
							handleWorkButton={handleWorkButton}
							handleBreakButton={handleBreakButton}
							data={todayData}
						/>
					}
				/>
				<Route path="/history" element={<History />} />
			</Routes>
		</>
	);
};

export default App;
