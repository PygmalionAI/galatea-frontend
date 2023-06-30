import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const schemaToClasses = {
  error: 'bg-red-500/10 text-red-400',
  success: 'bg-green-500/10 text-green-400',
};

const schemaToIcon = {
  error: AlertTriangle,
  success: CheckCircle,
};

const Alert = ({ title, children, schema }) => {
  const classes = [schemaToClasses[schema], 'rounded-lg p-4 text-sm flex gap-2'].join(' ');

  return (
    <div className={classes} role="alert">
      <div className="w-fit rounded-full bg-grey-600/10 p-3">
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
