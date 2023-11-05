import { useState } from "react";
import Clock from "./components/Clock";
import { LanguageContext } from "./components/LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  const handleSetLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;