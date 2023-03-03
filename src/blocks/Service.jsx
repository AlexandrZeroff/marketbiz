import React from "react";
import { Link } from "react-router-dom";

const Service = ({ link, image, header }) => {
  const scroll = () => {
    const section = document.getElementById("services");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <article className="service bg-th-light hover:bg-th-primary rounded-xl max-w-xs md:max-w-none mx-4 md:mx-0 mb-12 md:mb-0 p-4">
      <Link to={link} onClick={scroll}>
        <img className="rounded-xl" src={image} alt={header}></img>
      </Link>
      <Link to={link} onClick={scroll}>
        <h3 className="text-center uppercase mt-4">{header}</h3>
      </Link>
    </article>
  );
};

export default Service;
