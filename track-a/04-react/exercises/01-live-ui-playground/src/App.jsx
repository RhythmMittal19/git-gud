import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Playground from "./components/Playground";
import CodePanel from "./components/CodePanel";
import Footer from "./components/Footer";

function App() {
  const [borderRadius, setBorderRadius] = useState(12);
  const [shadowIntensity, setShadowIntensity] = useState("LG");
  const [fontSize, setFontSize] = useState(24);
  const [padding, setPadding] = useState(32);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  console.log(theme);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <div className="middle">
        <main className="main">
          <Sidebar
            borderRadius={borderRadius}
            onBorderRadiusChange={setBorderRadius}
            shadowIntensity={shadowIntensity}
            onShadowIntensityChange={setShadowIntensity}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            padding={padding}
            onPaddingChange={setPadding}
          />
          <Playground
            borderRadius={borderRadius}
            shadowIntensity={shadowIntensity}
            fontSize={fontSize}
            padding={padding}
          />
        </main>
        <CodePanel />
      </div>

      <Footer />
    </>
  );
}

export default App;
