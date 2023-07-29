import { SimpleNavBar } from "../../components/SimpleNavBar";
import { RegisterForm } from "./components/RegisterForm";

export const Register = () => {
	return (
		<>
			<div className="ga-black-lighter scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-ga-purple/900 scrollbar flex h-screen flex-col">
				<div>
					<SimpleNavBar />
				</div>
				<div className="mt-10 flex w-full justify-center">
					<div className="my-4 border-b border-ga-gray-darker" />
					<div className="w-full max-w-sm">
						<h1 className="text-4xl">Welcome.</h1>
						<p className="text-ga-white-default">
							Please create your account below.
						</p>
						<div className="my-4 border-b border-ga-gray-darker" />
						<RegisterForm />
					</div>
				</div>
			</div>
		</>
	);
};
