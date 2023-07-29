import { BetaInfo } from "../components/BetaPage/BetaInfo";
import { BetaNavBar } from "../components/BetaPage/BetaNavBar";
import { StarsBackground } from "../components/Shared/StarsBackground";

export const Beta = () => {
	return (
		<div className="bg-primary relative z-0">
			<div className="bg-primary relative bg-cover bg-center bg-no-repeat">
				<StarsBackground />
				<BetaNavBar />
				<BetaInfo />
			</div>
			<div className="relative z-0"></div>
		</div>
	);
};
