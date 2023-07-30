import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Text from "./Text";
import { useEffect, useState } from "react";
import List from "./List";

const Hero = ({ spring, targetRef }) => {
  const [width, setWidth] = useState(innerWidth);
  const [height, setHeight] = useState(innerHeight);
  const [listVisible, setListVisible] = useState(false);

  const scale = useTransform(spring, [0, (2 * height) / 12], [1, 8]);
  const scaleAll = useTransform(spring, [0, (2 * height) / 12], [1, 0]);
  const opacity = useTransform(spring, [0, (2 * height) / 12], [1, 0]);

  window.addEventListener("resize", () => {
    setWidth(innerWidth);
    setHeight(innerHeight);
  });

  //---Start Background movement---

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 30, damping: 10, bounce: 0 });
  const springY = useSpring(y, { stiffness: 30, damping: 10, bounce: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => {
      setListVisible(true);
    }, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  let skewX = useTransform(springX, [0, width], [-4, 4]);
  let skewY = useTransform(springY, [0, width], [-2, 2]);
  let scaleX = useTransform(springX, [0, width / 2, width], [1.1, 1.2, 1.1]);
  let scaleY = useTransform(springY, [0, width / 2, width], [1.1, 1.2, 1.1]);
  //---End Background movement---

  return (
    <motion.div
      style={{ opacity }}
      className={`relative z-20 inset-0 overflow-hidden pointer-events-none`}>
      {width > 640 ? (
        <motion.div
          style={{ skewX, skewY, scaleX, scaleY, scale }}
          className={`fixed inset-0 bg-cover bg-right -z-10 bg-backHero`}></motion.div>
      ) : (
        <motion.div
          className={`fixed inset-0 bg-cover bg-right -z-10 bg-backHeroSmartphone`}></motion.div>
      )}
      <div className="fixed inset-0 bg-black/30 -z-10"></div>
      <motion.div
        ref={targetRef}
        style={{ scale: scaleAll }}
        className="  flex h-[100vh] items-center justify-center">
        <div className="fixed md:px-20 sm:px-20 lg:px-40 px-16 pt-">
          <motion.div className="w-fit m-auto">
            <Text
              duration={1500}
              text="TRAVEL"
              clas="text-[18vw] leading-[15vw] text-center font-saira text-white"></Text>
          </motion.div>
          {listVisible ? (
            <List className="absolute hidden" spring={spring}></List>
          ) : null}
          <motion.div className="grid grid-cols-12">
            <div className="col-span-4 justify-self-end">
              <motion.div>
                <Text
                  duration={1500}
                  text="INTO"
                  clas="text-[9vw] leading-[8vw] font-saira text-white"></Text>
              </motion.div>
              <motion.div className="flex justify-end">
                <Text
                  duration={1500}
                  text="THE"
                  clas="text-[9vw] leading-[8vw] font-saira text-white"></Text>
              </motion.div>
            </div>
            <motion.div className="col-span-8 justify-self-end">
              <Text
                duration={1500}
                text="TIME"
                clas="text-[18vw] leading-[15vw] font-saira text-white"></Text>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Hero;
