import { twJoin } from "tailwind-merge";

const Button = ({
  children,
  schema = "primary",
  type = "button",
  disabled = false,
}) => (
  <button
    type={type}
    // makes conditional classes easier to read and write
    className={twJoin(
      "flex items-center justify-center gap-1 rounded-md px-3 py-2 transition-colors duration-100",
      schema == "primary" &&
        "bg-ga-purple-darker enabled:hover:bg-ga-purple-default enabled:active:bg-ga-purple-lighter disabled:cursor-not-allowed disabled:bg-ga-purple-darkest disabled:text-ga-gray-lighter",
      schema == "secondary" &&
        "bg-ga-gray-default hover:bg-ga-gray-lighter active:bg-ga-gray-lightest",
    )}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
