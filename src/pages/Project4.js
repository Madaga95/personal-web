import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectDta from "../components/ProjectDta";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ProjectDta projectNumber={3} />
        <Button left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
