import React from "react";
import pic1 from "../assets/about1.jpg"
import pic2 from "../assets/about2.jpg"
import pic3 from "../assets/about3.jpg"

const About = () => {
  return (
    <section id="about" className="pt-16 md:pt-24 lg:pt-32">
      <div className="p-default flex flex-col">
        <h3 className="uppercase text-th-secondary text-center">ABOUT US</h3>
        <h2 className="uppercase mt-8 text-center max-w-3xl mx-auto">
          We are a team of multi-skilled professionals ready to excel your
          business in several directions
        </h2>
      </div>
      <div className="bg-th-primary md:bg-vector bg-center bg-cover flex flex-wrap items-center justify-center p-6 mt-8">
        <img className="rounded-xl max-w-[280px] lg:max-w-xs m-4" src={pic1} alt="About us"></img>
        <img className="rounded-xl max-w-[280px] lg:max-w-xs m-4" src={pic2} alt="About us"></img>
        <img className="rounded-xl max-w-[280px] lg:max-w-xs m-4" src={pic3} alt="About us"></img>
      </div>
    </section>
  );
};

export default About;
