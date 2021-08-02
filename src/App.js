import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  const [language, setLanguage] = useState(
    window.location.pathname.replace("/", "").toUpperCase()
  );

  useEffect(() => {
    setLanguage(window.location.pathname.replace("/", "").toUpperCase());
  }, [location]);

  return (
    <>
    <div className=""></div>
    </>
  );
}

export default App;
