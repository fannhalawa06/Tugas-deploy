import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Particles from "./Particles";
import RotatingText from "./RotatingText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="content">
        <h1>
          Hello{" "}
          <RotatingText
            className="rotateStyle"
            texts={["World", "React", "Riyan"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "20%" }}
            animate={{ y: 0 }}
            exit={{ y: "-40%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>
      </div>
    </div>
  );
}

export default App;
