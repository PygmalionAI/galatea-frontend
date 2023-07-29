import { useState } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { SimpleNavBar } from "../../components/SimpleNavBar";
import { StarsBackground } from "../../components/StarsBackground";
import { TextInput } from "../../components/TextInput";

export const ContactUs = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(form);
		// TODO send form data to backend
	};

	return (
		<div className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar flex min-h-screen flex-col justify-between gap-12">
			<StarsBackground />

			<div>
				<SimpleNavBar />
			</div>

			<div className="z-100 relative mx-auto flex max-w-lg flex-col gap-6 rounded-3xl p-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-3xl font-bold">Contact Us</h1>
					<p className="text-ga-white-darker">
						We're excited to hear from you! If you have any questions,
						suggestions, or just want to say hi, feel free to drop us a message
						using the form below.
					</p>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="75"
					height="75"
					viewBox="0 0 32 32"
					className="text-purple-400 absolute right-5 top-5 text-ga-purple-default"
				>
					<g fill="none" fill-rule="evenodd">
						<path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
						<path
							fill="currentColor"
							d="M13.5 3a8.5 8.5 0 0 1 0 17H13v.99A1.01 1.01 0 0 1 11.989 22c-2.46-.002-4.952-.823-6.843-2.504C3.238 17.798 2.002 15.275 2 12.009V11.5A8.5 8.5 0 0 1 10.5 3h3Zm-5 7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
						/>
					</g>
				</svg>

				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<TextInput
						fieldName="Name"
						placeholder="Your name"
						type="text"
						required
						setInputFn={(val) => setForm({ ...form, name: val })}
					/>
					<TextInput
						fieldName="email"
						placeholder="Your email address"
						type="email"
						required
						setInputFn={(val) => setForm({ ...form, email: val })}
					/>
					<TextInput
						fieldName="Message"
						placeholder="What do you want to contact us about?"
						type="text"
						isMultiline
						required
						setInputFn={(val) => setForm({ ...form, message: val })}
					/>
				</form>

				<div className="flex flex-col gap-2">
					<Button type="submit" schema="primary">
						Send
					</Button>

					<p className="text-center text-sm text-ga-gray-lightest">
						We'll get back to you as soon as we can!
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};
