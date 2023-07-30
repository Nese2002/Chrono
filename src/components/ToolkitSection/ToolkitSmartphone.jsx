import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import list from "./ToolkitList";
import Text from "../HeroSection/Text";
import { useState } from "react";

const breakLine = (text) => {
  const arr = text.split(" ");
  return (
    <div className="flex flex-col absolute top-6 sm:top-8  left-5 ">
      <div className="relative w-full h-full"></div>
      {arr.map((item) => {
        return (
          <Text
            key={item}
            duration={250}
            text={item}
            clas=" self-start text-white font-saira text-3xl sm:text-4xl [text-shadow:_4px_3px_0_rgb(0_0_0_/_100%)]"></Text>
        );
      })}
    </div>
  );
};

const slider = {
  initial: (direction) => ({
    x: direction ? "-50vw" : "50vw",
    opacity: 0,
  }),
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction ? "50vw" : "-50vw",
    opacity: 0,
    zIndex: 0,
  }),
};

const ToolkitSmartphone = ({ swipePower }) => {
  const changeRight = () => {
    setDirection(true);
    const newIndex = index + 1;
    if (newIndex === list.length) setIndex(0);
    else setIndex(newIndex);
  };

  const changeLeft = () => {
    setDirection(false);
    const newIndex = index - 1;
    if (newIndex < 0) setIndex(list.length - 1);
    else setIndex(newIndex);
  };

  const [direction, setDirection] = useState(true);
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const textOpacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const { title, text, img, id } = list[index];
  const swipeConfidenceThreshold = 200;
  let swipe;
  return (
    <div className="sm:px-6 py-5 px-4 h-[100vh] relative overflow-hidden">
      <div className="pb-5">
        <div>
          <h1 className="text-right">
            <div>
              <span className="text-white opacity-50 font-saira text-2xl ">
                discover the{" "}
              </span>
              <span className="text-white font-saira text-4xl ">TIME </span>
            </div>
            <span className="text-white font-saira text-4xl ">
              TRAVEL TOOLKIT
            </span>
          </h1>
        </div>
      </div>
      <AnimatePresence initial="false" custom={direction}>
        <motion.div key={title} className="absolute">
          <motion.div
            variants={slider}
            exit="exit"
            animate="animate"
            initial="initial"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            custom={direction}
            className="pt-2 sm:pt-4 relative grid z-10">
            <motion.div style={{ opacity: textOpacity }}>
              {breakLine(title)}
            </motion.div>
            <motion.img
              style={{ x }}
              drag="x"
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  changeLeft();
                } else if (swipe > swipeConfidenceThreshold) {
                  changeRight();
                }
              }}
              src={img}
              alt=""
              className="max-w-xs m-auto object-cover -z-10"
            />
            <motion.div
              style={{ opacity: textOpacity }}
              className=" px-6  inset-0  relative ">
              <div className="relative py-4">
                <p className="text-white text-end text-lg leading-5 font-semibold relative z-10">
                  {text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default ToolkitSmartphone;
