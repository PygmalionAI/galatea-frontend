import React, { useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Toggle = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isDarkMode]);

return (
 <DarkModeSwitch
   checked={isDarkMode}
   onChange={toggleDarkMode}
   sunColor='white'
   moonColor='#090b10'
   size={15}
 />
);
};

export default Toggle;
