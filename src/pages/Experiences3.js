import React from "react";
import Button from "../components/Button";
import ExperiencesDta from "../components/ExperiencesDta";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Experiences3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ExperiencesDta projectNumber={2} />
        <Button left={"/experiences-1"} right={"/projet-1"} />
      </div>
    </main>
  );
};

export default Experiences3;
