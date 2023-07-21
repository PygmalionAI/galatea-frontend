import { LoginForm, SimpleNavBar } from "../components";

const Login = () => {
  return (
    <>
      <div className="ga-black-lighter scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-ga-purple/900 scrollbar flex h-screen flex-col">
        <div>
          <SimpleNavBar />
        </div>
        <div className="mt-10 flex w-full justify-center">
          <div className="my-4 border-b border-white/5" />
          <div className="w-full max-w-sm">
            <h1 className="text-4xl">Welcome.</h1>
            <p className="text-white/50">Please log in to your account.</p>
            <div className="my-4 border-b border-white/5" />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
