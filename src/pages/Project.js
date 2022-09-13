import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectDta from "../components/ProjectDta";

const Project = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ProjectDta projectNumber={0} />
        <Button left={"/experiences-3"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project;
