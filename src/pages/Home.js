import React from "react";
import Button from "../components/Button";
import Dynamic from "../components/Dynamic";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  const variante = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variante}>
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}>
              MADAGA GUEYE
            </motion.h1>
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}>
              <Dynamic />
            </motion.h2>
          </div>
        </div>
        <Button right={"/experiences-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
