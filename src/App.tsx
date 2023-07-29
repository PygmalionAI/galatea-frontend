import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account } from "./pages/Account/AccountPage";
import { Beta } from "./pages/Beta/BetaPage";
import { Characters } from "./pages/Characters/CharactersPage";
import { Chat } from "./pages/Chat/ChatPage";
import { ContactUs } from "./pages/ContactUs/ContactUsPage";
import { Landing } from "./pages/Landing/LandingPage";
import { Login } from "./pages/Login/LoginPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import { Register } from "./pages/Register/RegisterPage";
import { TermsOfService } from "./pages/TermsOfService/TermsOfServicePage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" element={<Landing />} />
				<Route path="/beta" element={<Beta />} />
				<Route path="/login" element={<Login />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/register" element={<Register />} />
				<Route path="/account" element={<Account />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/terms" element={<TermsOfService />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
