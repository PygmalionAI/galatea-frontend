import { useContext } from 'react';
import { ThemeContext } from './Contexts';

export function useDarkMode() { // used as: const [isDarkMode, setDarkMode] = useDarkMode();
  const context = useContext(ThemeContext);

  // Throw error if no Provider found in component tree
  if(context === undefined) {
    throw new Error('useDarkMode must be used within a ThemeProvider')
  }

  return context; // this would be [isDarkMode, setDarkMode]
  // Remember to import { usedarkMode } from this file
}