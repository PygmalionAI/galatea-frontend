import React from "react";

const schemaNameToClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

const Button = ({
  children,
  schema = "primary",
  type = "button",
  disabled = false,
}) => (
  <button
    type={type}
    className={`${schemaNameToClass[schema]} justify-center`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
