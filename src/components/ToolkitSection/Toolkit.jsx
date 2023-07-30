import { useState, useEffect, useRef } from "react";

import list from "./ToolkitList";
import { motion, useTransform } from "framer-motion";
import Text from "../HeroSection/Text";
import ToolkitSmartphone from "./ToolkitSmartphone";
import Items from "./Items";

const breakLine = (text) => {
  const arr = text.split(" ");
  return (
    <div className="flex flex-col absolute bottom-5 z-10 -left-16 ">
      <div className="relative w-full h-full"></div>
      {arr.map((item) => {
        return (
          <Text
            key={item}
            duration={250}
            text={item}
            clas="text-white text-5xl font-saira [text-shadow:_4px_3px_0_rgb(0_0_0_/_100%)]"></Text>
        );
      })}
    </div>
  );
};

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Toolkit = ({ spring, height, setLast }) => {
  const [width, setWidth] = useState(innerWidth);
  const sliderRef = useRef(null);
  const [id, setId] = useState(0);
  const [isHover, setHover] = useState(false);
  let par = width > 640 ? 11 : 9;

  const scale = useTransform(spring, [0, (6 * height) / 12 - 100], [0, 1]);
  const opacity = useTransform(spring, [0, (6 * height) / 12 - 100], [0, 1]); //Change to 0
  const translateX = useTransform(
    spring,
    [(6 * height) / 12, (10 * height) / 12],
    [
      0,
      sliderRef.current
        ? innerWidth / 3 -
          (sliderRef.current.offsetLeft + sliderRef.current.offsetWidth)
        : 0,
    ]
  );

  const translateY = useTransform(
    spring,
    [(par * height) / 12 + 100, height],
    [0, -innerHeight - 100]
  );

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      translateX: "-50%",
      translateY: "-50%",
      transition: { type: "spring" },
    },
  };

  window.addEventListener("resize", () => {
    setWidth(innerWidth);
  });

  return (
    <motion.div
      onViewportLeave={() => {
        setLast(false);
      }}
      style={{ translateY }}
      className="bg-backToolkit fixed inset-0 bg-cover z-[2] overflow-auto h-[100vh]">
      {width > 640 ? (
        <motion.div style={{ scale, opacity }} className=" lg:px-30 h-[100vh] ">
          <motion.div
            variants={variants}
            animate="default"
            className="fixed top-0 left-0 rounded-full -z-10 bg-purple-50/60 filter blur-2xl opacity-70 w-64 h-64 bottom-0"></motion.div>
          <div className="px-20 grid grid-cols-2 pt-6">
            <div className="">
              <h1 className="text-right flex flex-col">
                <div>
                  <span className="text-white opacity-50 font-saira text-2xl lg:text-3xl">
                    discover the{" "}
                  </span>
                  <span className="text-white font-saira text-4xl lg:text-5xl">
                    TIME{" "}
                  </span>
                </div>
                <span className="text-white font-saira text-4xl lg:text-5xl">
                  TRAVEL TOOLKIT
                </span>
              </h1>
            </div>
            <div className="relative h-56 flex items-end">
              <div className=" pb-4">
                {isHover ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-white px-4 lg:px-12 h-full text-end text-lg leading-5 font-semibold relative z-10 [text-shadow:_4px_3px_0_rgb(0_0_0_/_100%)]">
                    {list[id].text}
                  </motion.p>
                ) : (
                  <div className="h-full"></div>
                )}
              </div>
            </div>
          </div>
          <div ref={sliderRef} className="overflow-hidden cursor-pointer ">
            <div className="px-36 gap-12 lg:gap-16 items-center grid grid-flow-col auto-cols-auto h-[60vh] pt-6 overflow-hidden relative">
              {list.map((item) => {
                return (
                  <Items
                    item={item}
                    setId={setId}
                    key={item.id}
                    translateX={translateX}
                    breakLine={breakLine}
                    id={id}
                    setHover={setHover}
                    isHover={isHover}></Items>
                );
              })}
            </div>
          </div>
        </motion.div>
      ) : (
        <ToolkitSmartphone
          breakLine={breakLine}
          swipePower={swipePower}></ToolkitSmartphone>
      )}
    </motion.div>
  );
};
export default Toolkit;
