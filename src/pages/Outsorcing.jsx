import React from "react";
import pic1 from "../assets/outsorcing1.png";
import pic2 from "../assets/outsorcing2.png";
import { Link } from "react-router-dom";
import Quote from "../blocks/Quote";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Outsorcing = () => {
  return (
    <section id="outsorcing" className="p-default pt-24">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-24">
        <div className="grid grid-cols-12 sm:gap-x-4 md:gap-x-0">
          <div className="h-full bg-line bg-top bg-cover"></div>
          <div className="col-span-11 ml-4 lg:ml-[3vw]">
            <h2 className="uppercase">IT OUTSOURCING AND OUTSTAFFING</h2>
            <p className="mt-4">
              Let us handle your IT needs. This can include software
              development, infrastructure management, technical support, and
              more. The service provider is responsible for providing the
              necessary resources, including hardware, software, and human
              resources, to complete the project or task.
            </p>
            <Quote
              heading="advantages of IT outsourcing"
              text="The benefits of IT outsourcing include cost savings, access to a larger pool of talent, and increased flexibility in project management. By outsourcing IT needs, businesses can focus on their core competencies and leave the technology-related tasks to specialized service providers."
            />
            <img className="mt-4" src={pic1} alt="saas"></img>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={pic2} alt="saas" className="mx-auto"></img>
          <p className="mt-4">
            We can also help you with outstaffing. This means that your business
            does not have to handle the recruitment, hiring, and management of
            IT professionals, as this is our responsibility.
          </p>
          <Quote
            heading="advantages of outstaffing"
            text="The benefits of outstaffing include increased flexibility, access to a larger pool of talent, and reduced overhead costs. Outstaffing allows businesses to scale up or down their IT needs as required, without the need to hire and train new employees."
          />
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

export default Outsorcing;
