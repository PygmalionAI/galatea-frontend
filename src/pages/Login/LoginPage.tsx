import { SimpleNavBar } from "../../components/SimpleNavBar";
import { LoginForm } from "./components/LoginForm";

export const Login = () => {
	return (
		<>
			<div className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-ga-purple/900 scrollbar flex h-screen flex-col bg-ga-black-lighter">
				<div>
					<SimpleNavBar />
				</div>
				<div className="mt-10 flex w-full justify-center">
					<div className="my-4 border-b border-ga-gray-darker" />
					<div className="w-full max-w-sm">
						<h1 className="text-4xl">Welcome.</h1>
						<p className="text-ga-white-darker">
							Please log in to your account.
						</p>
						<div className="my-4 border-b border-ga-gray-darker" />
						<LoginForm />
					</div>
				</div>
			</div>
		</>
	);
};
