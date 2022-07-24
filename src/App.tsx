import { useEffect } from "react";
import { makeRotateEffect } from "@ce1pers/use-animation";
import "./App.css";

function App() {
  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) =>
      makeRotateEffect({
        x: e.clientX,
        y: e.clientY,
        dotColor: "rgb(26, 188, 156)",
      })
    );
    return () => {
      document.addEventListener("click", (e: MouseEvent) =>
        makeRotateEffect({ x: e.clientX, y: e.clientY })
      );
    };
  });

  return <div className="App">Hello Use Animation</div>;
}

export default App;
