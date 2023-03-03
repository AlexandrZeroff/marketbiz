import React from "react";
import dot from "../assets/dot-primary.svg";

const Quote = ({ heading, text }) => {
  return (
    <article className="grid grid-cols-12 my-8 md:my-8 gap-x-2 sm:gap-x-4 xl:gap-x-6">
      <div className="h-full bg-line bg-top bg-cover"></div>
      <div className="col-span-11">
        <h3 className="text-th-primary uppercase">{heading}</h3>
        <p className="mt-4 text-sm">{text}</p>
      </div>
    </article>
  );
};

export default Quote;
