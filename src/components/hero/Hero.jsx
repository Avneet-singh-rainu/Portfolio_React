import React from "react";
import "./hero.scss";
import { animate, motion } from "framer-motion";

const textvariant = {
  initial: {
    x: -50,
    opacity: 0,

  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay:0.2,
      duration: 0.5,
      staggerChildren: 0.9,
      whileInView: true,
    },
  },
};

const slidetext = {
  animate: {
    x: "-210%",
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="image">
        <img className="heroimg" src="/hero.png" alt="avatar" />
      </div>
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          variants={textvariant}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textvariant}>AVNEET SINGH</motion.h2>
          <motion.h1 variants={textvariant}>Web Developer</motion.h1>
          <motion.div
            className="techstack"
            variants={textvariant}
            initial="initial"
            animate="animate"
          >
            <img src="/react-js-icon.png" alt="reactjs" />
            <img src="/express-js-icon.png" alt="expressjs" />
            <img src="/node-js-icon.png" alt="nodejs" />
            <img src="/tailwind-css-icon.png" alt="tailwind css" />
            <img src="docker-icon.png" alt="docker" />
            <img src="java-programming-language-icon.png" alt="java" />
            <img src="/mysql-icon.png" alt="java" />
            <img src="/mongodb-icon.png" alt="java" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingtext"
        variants={slidetext}
        animate="animate"
      >
        NodeJs ReactJs ExpressJs MonngoDB Git Java
      </motion.div>
    </div>
  );
};
