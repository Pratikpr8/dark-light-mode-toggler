import React, { useState, useEffect } from "react";
import "../css/app.css";
import sampleData from "../data";
import SortedData from "./SortedData";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme',theme)
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <>
      <main>
        <nav>
          <div className="nav-centre">
            <h1>Dark/Light Mode</h1>
            <button className="btn" onClick={toggleTheme}>
              Toggle
            </button>
          </div>
        </nav>
        <section className="lists">
          {sampleData.map((data) => {
            return <SortedData key={data.id} {...data} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
