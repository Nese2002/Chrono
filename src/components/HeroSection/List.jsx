import { useState } from "react";
import list from "./HeroList";
import { motion } from "framer-motion";

const List = () => {
  const [width, setWidth] = useState(innerWidth);
  window.addEventListener("resize", () => setWidth(innerWidth));

  return (
    <motion.div
      className="mt-6 mb-10 block scale-0"
      initial={{ height: 0, scale: 0 }}
      animate={{
        width: "100%",
        height: "100%",
        scale: 1,
      }}
      transition={{ duration: 2, type: "spring" }}>
      {width < 640 ? (
        <div>
          {/* List Smartphone*/}

          {list.map((item, index) => {
            if (index !== 1) {
              return (
                <div className="" key={index}>
                  <div className="flex items-end justify-between">
                    <div className="relative">
                      <img
                        src={item.img}
                        alt=""
                        className="relative z-10 h-16 w-16 object-contain"
                      />
                      <div className="absolute bottom-0 h-8 w-full animate-pulse rounded-full bg-[#A87755] blur-md filter"></div>
                    </div>
                    <h1 className="relative z-10 self-center font-farro text-lg font-saira leading-4 text-white">
                      {item.title}
                    </h1>
                  </div>
                  <p className="relative z-10 text-white/70  text-sm leading-4">
                    {item.text}
                  </p>
                  <div className="relative mt-2 h-[0.1rem] w-full bg-[#A87755]">
                    <div className="absolute h-1 w-full bg-[#A87755] blur-sm filter"></div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="my-3" key={index + 10}>
                  <div className="flex items-end justify-between">
                    <h1 className="relative z-10 font-farro text-lg self-center font-saira leading-4 text-white">
                      {item.title}
                    </h1>
                    <div className="relative">
                      <img
                        src={item.img}
                        alt=""
                        className="relative z-10 h-16 w-16 object-contain"
                      />
                      <div className="absolute bottom-0 h-8 w-full animate-pulse rounded-full bg-[#A87755] blur-md filter"></div>
                    </div>
                  </div>
                  <p className="relative z-10 text-white/70 text-sm leading-4">
                    {item.text}
                  </p>
                  <div className="relative mt-2 h-[0.1rem] w-full bg-[#A87755]">
                    <div className="absolute h-1 w-full bg-[#A87755] blur-sm filter"></div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div>
          {/* List md-screens*/}
          <div className=" hidden md:grid md:grid-cols-3 md:gap-16">
            {list.map((item, index) => {
              return (
                <div>
                  <div className="flex items-end justify-between">
                    <h1 className="relative z-10 font-farro text-xl text-white">
                      {item.title}
                    </h1>
                    <div className="relative">
                      <img
                        src={item.img}
                        alt=""
                        className="relative z-10 h-24 w-24 object-contain"
                      />
                      <div className="absolute bottom-0 h-12 w-full animate-pulse rounded-full bg-[#A87755] blur-md filter"></div>
                    </div>
                  </div>
                  <p className="relative z-10 text-white/70">{item.text}</p>
                  <div className="relative mt-4 h-[0.15rem] w-full bg-[#A87755]">
                    <div className="absolute h-1 w-full bg-[#A87755] blur-sm filter"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default List;
