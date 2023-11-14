import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.225,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

const itemvariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
    scale: 0.5,
  },
};

export const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
