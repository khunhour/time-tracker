import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

//component
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import firebase from "./firebase/firebase";
import Dashboard from "./component/Dashboard";
import History from "./component/History";

// firebase
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
	const [history, setHistory] = useState<any>([]);
	const [timer, setTimer] = useState<number>(0);
	const [todayData, setTodayData] = useState({
		workStartTime: 0,
		workEndTime: 0,
		breakStartTime: 0,
		breakEndTime: 0,
		totalWorkTime: 0,
		totalBreakTime: 0,
	});
	const navigate = useNavigate();

	// set timer to increment every second
	useEffect(() => {
		let workTimer: any;
		if (startWork) {
			workTimer = setInterval(() => {
				setTimer((prevState: any) => prevState + 1);
			}, 1000);
		}
		return () => {
			clearInterval(workTimer);
		};
	}, [startWork]);

	// monitor when user signin and signout
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

	// fetch history when logged in
	useEffect(() => {
		if (isLoggedIn) {
			const updateHistory = async () => {
				const data = await firebase.fetchHistory();
				setHistory([...data]);
			};
			updateHistory();
		}
	}, [isLoggedIn]);

	// submit work data to database
	const submitToDatabase = async () => {
		firebase.addTodayData(todayData);
		const data = await firebase.fetchHistory();
		setHistory([...data]);
		resetUserData();
		setTimer(0);
	};

	// onchange event listener
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === "email") {
			setEmail(e.target.value);
		} else if (e.target.id === "password") {
			setPassword(e.target.value);
		}
	};

	// when user login or sign up
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

	// when a user log out
	const handleLogout = () => {
		firebase.logout();
		setIsLoggedIn(false);
	};

	// change form type from login to signup
	const handleChangeFormType = (e: React.MouseEvent<HTMLButtonElement>) => {
		navigate("/");
		setFormType(e.currentTarget.value);
	};

	const handleWorkButton = async () => {
		if (!startWork) {
			// started work -> update state
			setTodayData((prevData) => ({
				...prevData,
				workStartTime: Date.now(),
			}));
		} else {
			// ended work -> update state
			let total = (Date.now() - todayData.workStartTime) / 1000;
			setTodayData((prevData) => ({
				...prevData,
				workEndTime: Date.now(),
				totalWorkTime: total,
			}));
		}
		setStartWork(!startWork);
	};

	// set data state when break buttons is pressed
	const handleBreakButton = () => {
		if (!startBreak) {
			// started break -> update state
			setTodayData((prevData) => ({
				...prevData,
				breakStartTime: Date.now(),
			}));
		} else {
			// ended break -> update state
			let total = (Date.now() - todayData.breakStartTime) / 1000;
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
							submitToDatabase={submitToDatabase}
							data={todayData}
							timer={timer}
						/>
					}
				/>
				<Route path="/history" element={<History data={history} />} />
			</Routes>
		</>
	);
};

export default App;
