import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/madaga-gueye-a42518197/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Madaga95"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}>
          <i className="fab fa-github"></i>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
