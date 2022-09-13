import React from "react";
import Button from "../components/Button";
import ExperiencesDta from "../components/ExperiencesDta";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Experiences = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ExperiencesDta projectNumber={0} />
        <Button left={"/"} right={"/experiences-2"} />
      </div>
    </main>
  );
};

export default Experiences;
