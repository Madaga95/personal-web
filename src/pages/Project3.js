import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectDta from "../components/ProjectDta";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ProjectDta projectNumber={2} />
        <Button left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export default Project3;
