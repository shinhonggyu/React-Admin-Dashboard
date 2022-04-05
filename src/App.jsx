import Pages from "./pages/Pages";
import "./style/dark.scss";
import { useDarkMode } from "./context/darkModeContext";

const App = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Pages />
    </div>
  );
};

export default App;
