import { Footer } from "../../components/Footer";
import { StarsBackground } from "../../components/StarsBackground";
import { LandingInfo } from "./components/LandingInfo";
import {LandingNavBar} from "./components/LandingNavBar";

export const Landing = () => {
	return (
		<div className="">
			<StarsBackground />
			<LandingNavBar />
			<LandingInfo />
			<Footer />
		</div>
	);
};
