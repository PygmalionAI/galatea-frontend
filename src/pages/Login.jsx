import { LoginForm, SimpleNavBar } from "../components";
import Footer from "../components/Shared/Footer";

const Login = () => {
  return (
    <div className="ga-black scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar flex min-h-screen flex-col justify-between gap-8">
      <div>
        <SimpleNavBar />
      </div>

      <div className="flex w-full justify-center">
        <div className="my-4 border-b border-white/5" />
        <div className="w-full max-w-sm">
          <h1 className="text-4xl">Welcome.</h1>
          <p className="text-white/50">Please log in to your account.</p>
          <div className="my-4 border-b border-white/5" />
          <LoginForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
