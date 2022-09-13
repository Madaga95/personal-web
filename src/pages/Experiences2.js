import React from "react";
import Button from "../components/Button";
import ExperiencesDta from "../components/ExperiencesDta";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Experiences2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ExperiencesDta projectNumber={1} />
        <Button left={"/experiences-1"} right={"/experiences-3"} />
      </div>
    </main>
  );
};

export default Experiences2;
