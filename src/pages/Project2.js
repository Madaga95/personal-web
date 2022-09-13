import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectDta from "../components/ProjectDta";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ProjectDta projectNumber={1} />
        <Button left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export default Project2;
