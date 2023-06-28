import *as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Toggle = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
    style={{ marginBottom: '2rem', opacity: '75%' }}
    checked={isDarkMode}
    onChange={toggleDarkMode}
    sunColor='white'
    moonColor='white'
    size={15}
  />
);
  };
export default Toggle;
