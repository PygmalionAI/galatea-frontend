import { AlertTriangle, CheckCircle } from "lucide-react";
import React from "react";

const schemaToClasses = {
  error: "bg-ga-red/10 text-ga-red",
  success: "bg-ga-green/10 text-ga-green",
};

const schemaToIcon = {
  error: AlertTriangle,
  success: CheckCircle,
};

const Alert = ({ title, children, schema }) => {
  const classes = [
    schemaToClasses[schema],
    "rounded-lg p-4 text-sm flex gap-2",
  ].join(" ");

  return (
    <div className={classes} role="alert">
      <div className="w-fit rounded-full bg-ga-gray-darker/10 p-3">
        {React.createElement(schemaToIcon[schema], { size: 18 })}
      </div>
      <div>
        <b>{title}</b>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Alert;
