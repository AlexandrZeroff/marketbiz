import React from "react";
import { Outlet } from "react-router-dom";
import el from "../assets/vector.png";

const Services = () => {
  return (
    <section
      id="services"
      className="relative pb-16 overflow-hidden"
    >
      <div className="p-default pt-24">
        <img
          src={el}
          className="hidden absolute top-[80px] -left-[160px] md:inline w-96"
          alt=""
        ></img>
        <h3 className="uppercase text-th-secondary text-center">
          What services we offer
        </h3>
        <h1 className="uppercase text-center mt-2">OUR SOLUTION</h1>
        <h3 className="uppercase mt-8 text-center mx-auto max-w-md">
          MarketBiz team has years of experience in wholesale trade-in products,
          logistic services, and Software development. Our approach is
          customized for every client. Your success is our first priority. 
        </h3>
        <Outlet />
      </div>
      <img
        src={el}
        className="absolute bottom-3 left-[60vw] md:hidden w-96"
        alt=""
      ></img>
    </section>
  );
};

export default Services;
