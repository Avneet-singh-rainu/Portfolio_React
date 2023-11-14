import React, { useState } from "react";
import "./project.scss";
import { data } from "./data.js";
import { motion } from "framer-motion";

const variant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const Project = () => {

  const handleCilck=(id)=>{

   const link = data.filter((user) => {return user.id===id});

   const[{ide,imgage,name,tech,url}]=link

   window.location.replace(url);
  }
  return (
    <div className="projects">
      <motion.h1 variants={variant} initial="initial" whileInView="animate">
        My <span style={{ color: "orange" }}>P</span>rojects
      </motion.h1>
      {data.map((project) => {
        return (
          <>
            <div className="grid" key={project.id}>
              {data.map((project) => {
                return (
                  <motion.div
                  key={project.id}
                    className="card"
                    variants={variant}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="projectimage">
                      <img src={project.image} alt="image" />
                    </div>
                    <div className="desc">
                      <h1>{project.name}</h1>
                      {project.tech.map((tech) => {
                        return (
                          <ul style={{ paddingLeft: "20px" }}>
                            <li
                              style={{ fontSize: "20px", marginBottom: "5px" }}
                            >
                              {tech}
                            </li>
                          </ul>
                        );
                      })}
                      <button className="githubbtn" onClick={()=>{handleCilck(project.id)}}>Github</button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};
