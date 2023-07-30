import { useRef } from "react";

import { motion, useMotionValue } from "framer-motion";

const Items = ({
  item,
  setId,
  id,
  breakLine,
  setHover,
  isHover,
  translateX,
}) => {
  return (
    <motion.div style={{ translateX }} className="relative">
      <motion.img
        key={item.id}
        whileHover={{
          scale: 1.35,
        }}
        onHoverStart={() => {
          setId(item.id);
          setTimeout(() => {
            setHover(true);
          }, 100);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        className={` min-w-[12rem] min-h-[12rem] lg:min-w-[20rem] lg:min-h-[20rem]`}
        src={item.img}
        alt=""
      />
      {id === item.id && isHover ? (
        <motion.div className="absolute bottom-0 pointer-events-none">
          {breakLine(item.title)}
        </motion.div>
      ) : null}
    </motion.div>
  );
};
export default Items;
