import React from "react";
import pic from "../assets/logistics.png";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Logistic = () => {
  return (
    <section id="logistic" className="p-default pt-24">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-24">
        <div className="grid grid-cols-12 sm:gap-x-4 md:gap-x-0">
          <div className="h-full bg-line bg-top bg-cover"></div>
          <div className="col-span-11 ml-4 lg:ml-[3vw]">
            <h2 className="uppercase">Logistic services</h2>
            <p className="mt-4">
              Our team will provide you with the management of the flow of goods
              and services from the point of origin to the point of consumption.
              This includes the planning, execution, and control of the
              transportation, storage, and distribution of goods.
            </p>
            <p className="mt-4">
              Our services include transportation, warehousing, inventory
              management, order fulfillment, and freight forwarding. Increase
              the efficiency of your business, improve customer service, and
              reduce costs starting today. By outsourcing logistics, you can
              focus on the core competencies and leave the logistics to a
              specialized service provider.
            </p>
          </div>
        </div>
        <div className="sm:px-[10vw] md:px-0 lg:px-[1vw] xl:px-3[vw] mt-12 md:mt-0">
          <img src={pic} alt="logistics" className="mx-auto"></img>
        </div>
      </div>
      <div className="flex items-center mt-16 flex-wrap justify-center">
        <AnchorLink className="btn-primary m-4" href="#contacts">
          Get in touch
        </AnchorLink>
        <Link className="btn-secondary m-4" to={"/"}>
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Logistic;
