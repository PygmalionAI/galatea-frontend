import { NotFound } from "../components/NotFoundPage/NotFound";
import { NotFoundNavBar } from "../components/NotFoundPage/NotFoundNavBar";
import { StarsBackground } from "../components/Shared/StarsBackground";

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
