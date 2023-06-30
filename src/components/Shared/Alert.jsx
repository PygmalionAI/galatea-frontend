import React from 'react';
import { AlertTriangle } from 'lucide-react';

const schemaToClasses = {
  error: 'bg-red-500/10 text-red-400',
};

const schemaToIcon = {
  error: AlertTriangle,
};

const Alert = ({ title, children, schema }) => {
  const classes = [schemaToClasses[schema], 'rounded-lg p-4 text-sm flex gap-2'].join(' ');

  return (
    <div className={classes} role="alert">
      <div className="w-fit rounded-full bg-red-600/10 p-3">
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
