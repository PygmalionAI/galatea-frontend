import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-between gap-4 bg-[var(--ga-lighter)] px-8 py-3 shadow-xl max-sm:p-3">
      <h1>footer</h1>
    </div>
  );
};

export default Footer;
