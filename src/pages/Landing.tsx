import { LandingInfo } from "../components/LandingPage/LandingInfo";
import { LandingNavBar } from "../components/LandingPage/LandingNavBar";
import { Footer } from "../components/Shared/Footer";
import { StarsBackground } from "../components/Shared/StarsBackground";

export const Landing = () => {
	return (
		<div className="bg-ga-black-lighter">
			<StarsBackground />
			<LandingNavBar />
			<LandingInfo />
			<Footer />
		</div>
	);
};
