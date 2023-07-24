import { useDarkMode } from './ContextFunctions';
import { ThemeContext } from './Contexts';

import { Toggle, NavBar } from '../Components';

const Providers = () => {
  const [isDarkMode, setDarkMode] = useDarkMode('false');

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <Toggle/>
      <NavBar/>
    </ThemeContext.Provider>
  )
}

export default Providers;
