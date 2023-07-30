import { useState, useRef } from "react";
import Starter from "./Starter";
import StarterSmartphone from "./StarterSmarphone";
import list from "./DestinationList";
import { motion, AnimatePresence, animate } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Destination = ({ isLast, setLast }) => {
  const [width, setWidth] = useState(innerWidth);
  const [height, setHeight] = useState(innerHeight);
  const [selected, setSelected] = useState(2);

  window.addEventListener("resize", () => {
    setWidth(innerWidth);
    setHeight(innerHeight);
  });

  const moveButton = {
    initial: {
      y: 0,
    },
    animate: {
      y: [5, 0, 5],
      transition: { repeat: Infinity, duration: 0.5, repeatDelay: 1 },
    },
  };

  const slider = {
    initial: () => ({
      opacity: 0.5,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: () => ({
      scale: 1.5,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence initial="false">
      <motion.div
        key={list[selected].id}
        variants={slider}
        animate="animate"
        initial="initial"
        exit="exit"
        className={`${list[selected].background} fixed z-[1] inset-0 bg-cover overflow-hidden h-[100vh]`}>
        {width > 640 ? (
          <div className="relative ">
            <div className="absolute right-0 left-0 bottom-0 top-10">
              <motion.div
                onClick={() => {
                  setLast(true);
                }}
                className="m-auto relative z-10 w-10 h-10 "
                variants={moveButton}
                initial="initial"
                animate="animate">
                <MdOutlineKeyboardDoubleArrowUp className="fill-white m-auto w-10 h-10 animate-pig "></MdOutlineKeyboardDoubleArrowUp>
              </motion.div>
            </div>
            <div className=" w-full h-full pl-24 grid grid-cols-12">
              <div className="py-24 col-span-7 grid grid-cols-6">
                {/* Left part*/}
                <div className=" col-span-1 relative lg:px-4 ">
                  <div
                    className={`absolute inset-0 w-[0.1rem] bg-white/20 m-auto left-0 right-0 `}></div>
                  <div className="grid grid-rows-6 h-full  gap-0">
                    {list.map((item) => {
                      if (item === null) return;
                      return (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                          key={item.id}
                          onClick={() => {
                            setSelected(item.id);
                          }}
                          className={`rounded-full cursor-pointer z-10 bg-[#9f9b91] relative justify-self-center self-center flex items-center justify-center ${
                            selected === item.id ? "w-full h-20" : "w-5 h-5"
                          }`}>
                          {selected === item.id ? (
                            <h1 className="text-white text-center text-6xl font-saira">
                              {item.id}
                            </h1>
                          ) : null}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                {/* TEXT */}
                <div className="h-full col-span-5 items-center flex">
                  <div className=" pl-16 ">
                    <h1 className="text-white text-6xl font-saira">
                      {list[selected].title}
                    </h1>
                    <p className="text-white/80 text-2xl pt-4">
                      {list[selected].text}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 overflow-auto">
                <Starter
                  isLast={isLast}
                  selected={selected}
                  setSelected={setSelected}></Starter>
              </div>
            </div>
          </div>
        ) : (
          <div className=" px-12 pt-6">
            <div>
              <h1 className="text-white text-3xl font-saira">
                {list[selected].title}
              </h1>
              <p className="text-white/80 text-lg leading-5 pt-2">
                {list[selected].text}
              </p>
            </div>
            <StarterSmartphone
              selected={selected}
              setSelected={setSelected}></StarterSmartphone>
            <div className="flex relative items-center justify-center space-x-4">
              <div className="absolute top-1/2 -translate-y-1/2 left-12 right-10 h-[0.1rem] bg-white/20 "></div>
              {list.map((item) => {
                if (item === null) return;
                return (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={item.id}
                    onClick={() => {
                      setSelected(item.id);
                    }}
                    className={`rounded-full cursor-pointer z-10 bg-[#9f9b91] relative flex items-center justify-center ${
                      selected === item.id ? "w-14 h-14" : "w-3 h-3"
                    }`}>
                    {selected === item.id ? (
                      <h1 className="text-white text-center text-3xl font-saira">
                        {item.id}
                      </h1>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
export default Destination;
