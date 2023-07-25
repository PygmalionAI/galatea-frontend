import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Account,
  Beta,
  Characters,
  Chat,
  Landing,
  Login,
  NotFoundPage,
  Register,
} from "./pages";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;

