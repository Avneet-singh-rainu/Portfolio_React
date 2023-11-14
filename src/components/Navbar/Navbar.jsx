import React from "react";
import "./Navbar.scss";
import { Sidebar } from "./sidebar/sidebar";
import { animate, motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1.2 }}
        >
          PortFolio
        </motion.span>

        <div className="links">
          <a href="">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1.2 }}
              src="instagram.png"
              alt=""
            />
          </a>
          <a href="">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1.2 }}
              src="facebook.png"
              alt=""
            />
          </a>
        
        </div>
      </div>
    </div>
  );
};
