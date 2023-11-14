import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
export const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"], //animation starts and ends  depens on two arrays 1st rep start
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const texttransform = useTransform(scrollYProgress, [0, 1], ["50px", "10px"]);


  return (
    <>
      <div ref={ref} className="parallax">
        <div className="text">
          <motion.h1 style={{fontSize:texttransform , y:-yBg}}>What we Did?</motion.h1>
        </div>
        <motion.div className="mountains">
          <img src="/mountains.png" alt="" />
        </motion.div>
        <motion.div className="planets" style={{ x: yBg }}>
          <img src="/planets.png" alt="" />
        </motion.div>
        <motion.div className="stars" style={{ y: yBg }}>
          <img src="/stars.png" alt="" />
        </motion.div>
      </div>
    </>
  );
};
