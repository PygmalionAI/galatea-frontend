import { StarsBackground } from "../../components/StarsBackground";
import { NotFound } from "./components/NotFound";
import { NotFoundNavBar } from "./components/NotFoundNavBar";

export const NotFoundPage = () => {
	return (
		<>
			<div className="bg-primary relative z-0">
				<div className="bg-primary relative bg-cover bg-center bg-no-repeat">
					<StarsBackground />
					<NotFoundNavBar />
					<NotFound />
				</div>
				<div className="relative z-0"></div>
			</div>
		</>
	);
};
