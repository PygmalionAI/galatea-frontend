import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { SimpleNavBar } from "../../components/SimpleNavBar";
import { StarsBackground } from "../../components/StarsBackground";
import { PrivacySection } from "./components/PrivacySection";

export const PrivacyPolicy = () => {
	// remove overflow hidden from body
	// temporary as not to mess with other pages by editing global css
	useEffect(() => {
		document.body.style.overflow = "auto";
	}, []);

	return (
		<div className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar flex min-h-screen flex-col justify-between gap-12 bg-ga-black-lighter">
			<StarsBackground />

			<div>
				<SimpleNavBar />
			</div>

			<div className="mx-auto flex max-w-5xl flex-col gap-12 px-4">
				<h2 className="text-3xl font-bold">
					Privacy Policy for{" "}
					<span className="whitespace-nowrap">
						Pygmalion<span className="text-purple-400">AI</span>
					</span>
				</h2>

				<div className="flex flex-col gap-4">
					<h3 className="text-lg font-bold italic">
						Effective Date: [Insert Date]
					</h3>
					<p className="italic">
						Thank you for using PygmalionAI, an open-source project dedicated to
						creating large language models for chat and role-play purposes. This
						Privacy Policy is designed to inform you about the data we collect,
						how we use it, and your rights concerning your personal information.
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<PrivacySection
						title="Information We Collect:"
						content="PygmalionAI does not collect any personal information or data from its users. As an open-source language model, the interactions with PygmalionAI are entirely anonymous, and we do not store any identifiable information about users or their conversations."
					/>

					<PrivacySection
						title="How We Use Information:"
						content="Since PygmalionAI does not collect any personal information, we do not use any data for any purpose. Conversations with the language model are processed in real-time without being saved."
					/>

					<PrivacySection
						title="How We Share Information:"
						content="PygmalionAI does not share any information with third parties. Conversations with the language model are processed in real-time without being saved."
					/>

					<PrivacySection
						title="Cookies and Tracking Technologies:"
						content="PygmalionAI does not use cookies or any tracking technologies to monitor or collect user activity on the platform."
					/>

					<PrivacySection
						title="Third-Party Services:"
						content="PygmalionAI is hosted on servers that may be provided by third-party service providers. However, these service providers do not have access to or collect any user data."
					/>

					<PrivacySection
						title="Security Measures:"
						content="While we take reasonable measures to ensure the security of our platform and any data passing through it, it is essential to note that since we do not collect any user data, there is no personal information at risk."
					/>

					<PrivacySection
						title="Children's Privacy:"
						content="PygmalionAI is not intended for use by individuals under the age of 13. We do not knowingly collect any personal information from children. If you are a parent or guardian and believe that your child has interacted with PygmalionAI, please contact us, and we will take necessary actions to remove any data if found."
					/>

					<PrivacySection
						title="Changes to this Privacy Policy:"
						content="This Privacy Policy may be updated from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated version on this page with the new effective date. We encourage you to review this Privacy Policy regularly to stay informed about our data practices."
					/>
				</div>

				<div className="flex max-w-2xl flex-col gap-4">
					<p>
						If you have any questions or concerns about this Privacy Policy or
						the use of PygmalionAI, please contact us at [Insert Contact Email].
					</p>

					<p className="text-purple-200">
						By using PygmalionAI, you agree to the terms outlined in this
						Privacy Policy. If you do not agree with this policy, please refrain
						from using the platform.
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};
