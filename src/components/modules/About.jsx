import React from "react";

const About = ({ core }) => {
  setTimeout(() => {
    core.setHome(false);
  }, 10);

  return (
    <div>
      <h1>Acerca de esta plataforma</h1>
      <p>
        Do elit sunt quis quis dolore enim pariatur. Elit ipsum ea aliqua ex
        amet velit tempor ullamco magna consectetur ut ut cupidatat nulla.
        Incididunt reprehenderit voluptate et nisi ea ex non ad pariatur elit
        anim. Nostrud culpa Lorem eiusmod aliqua pariatur ad ad commodo id.
        Tempor labore quis ad aute et aute deserunt duis nulla do enim. Id do
        est culpa est enim aliqua id Lorem. Sit sit exercitation non incididunt
        anim nostrud reprehenderit in minim anim.
      </p>
    </div>
  );
};

export default About;
