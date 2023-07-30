import { useScroll } from "framer-motion";
import Hero from "./components/HeroSection/Hero";
import Toolkit from "./components/ToolkitSection/Toolkit";
import { useEffect, useRef, useState } from "react";
import Destination from "./components/DestinationSection/Destination";

function App() {
  const targetRef = useRef(null);
  const toolkitRef = useRef(null);
  const ref = useRef(null);
  const [isTimer, setTimer] = useState(false);
  const [isLast, setLast] = useState(false);
  const { scrollY } = useScroll();
  const [width, setWidth] = useState(innerWidth);

  window.addEventListener("resize", () => {
    setWidth(innerWidth);
  });

  setTimeout(() => {
    setTimer(true);
  }, 3000);

  useEffect(() => {
    if (isLast && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div
      className={` -z-30 ${
        isTimer ? "overflow-auto" : "h-screen overflow-hidden"
      } `}>
      <Hero spring={scrollY} targetRef={targetRef}></Hero>
      <Toolkit
        setLast={setLast}
        height={toolkitRef.current ? toolkitRef.current.offsetTop : 0}
        spring={scrollY}></Toolkit>
      {width > 640 ? (
        <div
          ref={ref}
          className="h-[100vh] mt-[100vh] w-full pointer-events-none relative "></div>
      ) : null}
      <div
        ref={toolkitRef}
        className="h-[100vh] w-full pointer-events relative -z-20"></div>
      <Destination isLast={isLast} setLast={setLast}></Destination>
    </div>
  );
}

export default App;
