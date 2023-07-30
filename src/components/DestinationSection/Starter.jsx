import React, { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import list from "./DestinationList";

const slider = {
  initial: (direction) => ({
    y: direction ? "-100vh" : "100vh",
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction ? "100vh" : "-100vh",
    opacity: 0,
  }),
};

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Starter({ selected, setSelected, isLast }) {
  const [direction, setDirection] = useState(true);
  const { id, img } = list[selected];
  const swipeConfidenceThreshold = 500;
  let swipe;

  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let slider = setInterval(() => {
      changeBottom();
    }, 100000);
    return () => clearInterval(slider);
  }, [selected]);

  useEffect(() => {
    if (!isLast && containerRef.current) containerRef.current.scrollIntoView();
  }, []);

  const changeBottom = () => {
    setDirection(true);
    const newIndex = selected + 1;
    if (newIndex === list.length) setSelected(1);
    else setSelected(newIndex);
  };

  const changeTop = () => {
    setDirection(false);
    const newIndex = selected - 1;
    if (newIndex < 1) setSelected(list.length - 1);
    else setSelected(newIndex);
  };

  return (
    <div className="h-full  ">
      <motion.div className="w-full flex items-center justify-center h-full relative ">
        <AnimatePresence initial="false" custom={direction}>
          <motion.div
            dragConstraints={{ top: 0, bottom: 0 }}
            drag="y"
            dragPropagation
            className="max-w-xs fixed "
            variants={slider}
            exit="exit"
            animate="animate"
            initial="initial"
            key={id}
            custom={direction}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}>
            <motion.img
              drag="y"
              dragElastic={0}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                swipe = swipePower(offset.y, velocity.y);

                if (swipe < -swipeConfidenceThreshold) {
                  changeTop();
                } else if (swipe > swipeConfidenceThreshold) {
                  changeBottom();
                }
              }}
              src={img}
              alt=""
              className=" rounded-3xl object-cover border-2 max-w-[15rem]"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {isLast ? null : (
        <motion.div className=" absolute inset-0 overflow-auto ">
          <motion.div
            onViewportEnter={(e) => {
              changeTop();
              setTimeout(() => {
                if (containerRef.current) containerRef.current.scrollIntoView();
              }, 700);
            }}
            ref={ref}
            className="h-[1rem] mb-[1rem]  w-64 "></motion.div>
          <div ref={containerRef} className="h-[115vh] w-64 "></div>
          <motion.div
            onViewportEnter={(e) => {
              changeBottom();
              setTimeout(() => {
                if (containerRef.current) containerRef.current.scrollIntoView();
              }, 700);
            }}
            ref={ref}
            className="h-[1rem]  w-64 "></motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Starter;
