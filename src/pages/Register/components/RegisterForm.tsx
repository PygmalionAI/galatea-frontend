import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../apis/api";
import { Alert } from "../../../components/Alert";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";

export const RegisterForm = () => {
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [signedUp, setSignedUp] = useState(false);

	const navigateTo = useNavigate();

	useEffect(() => {
		if (signedUp) {
			navigateTo("/login");
		}
	});

	const handleSubmit = async (evt: any) => {
		evt.preventDefault();
		const username = evt.target.username.value;
		const email = evt.target.email.value;
		const password = evt.target.password.value;
		const conpass = evt.target.confirmpassword.value;

		if (password !== conpass) {
			setErrorMessage("Passwords do not match.");
			return;
		}

		try {
			// Call the signUp function and pass the required information
			await signUp(email, username, password);
			setSuccessMessage("Registration successful. You can now log in.");
			setSignedUp(true);
		} catch (error) {
			// Handle any errors that might occur during the sign-up process
			console.log(`There was an error while signing up: ${error}`);
			setErrorMessage(
				"Registration failed. Please make sure that your credentials are not already in use.",
			);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<TextInput
					fieldName="username"
					placeholder="Username"
					type="text"
					required
				/>
				<TextInput
					fieldName="email"
					placeholder="Email"
					type="email"
					required
				/>
				<div className="relative">
					<TextInput
						fieldName="password"
						placeholder="Password"
						type={isPasswordVisible ? "text" : "password"}
						required
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							setPasswordVisible((prevState) => !prevState);
						}}
						className="absolute right-2 top-1/2 -translate-y-1/2 transform"
					>
						{isPasswordVisible ? <Eye /> : <EyeOff />}
					</button>
				</div>

				<div className="relative">
					<TextInput
						fieldName="confirmpassword"
						placeholder="Confirm Password"
						type={isConfirmPasswordVisible ? "text" : "password"}
						required
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							setConfirmPasswordVisible((prevState) => !prevState);
						}}
						className="absolute right-2 top-1/2 -translate-y-1/2 transform"
					>
						{isConfirmPasswordVisible ? <Eye /> : <EyeOff />}
					</button>
				</div>
				<Button type="submit" schema="primary">
					Sign Up
				</Button>
				{errorMessage && (
					<Alert schema="error" title="Registration Failed">
						{errorMessage}
					</Alert>
				)}
				{successMessage && (
					<Alert schema="success" title="Registration Successful">
						{successMessage}
					</Alert>
				)}
			</div>
		</form>
	);
};
