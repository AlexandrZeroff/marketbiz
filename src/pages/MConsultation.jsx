import React from "react";
import Quote from "../blocks/Quote";
import pic1 from "../assets/mconsultation.png";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MConsultation = () => {
  return (
    <section id="marketing-consultation" className="p-default pt-24">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-24">
        <div className="grid grid-cols-12 sm:gap-x-4 md:gap-x-0">
          <div className="h-full bg-line bg-top bg-cover"></div>
          <div className="col-span-11 ml-4 lg:ml-[3vw]">
            <h2 className="uppercase">marketing consultation</h2>
            <p className="mt-4">
              Marketing consultations involve providing guidance and advice to
              businesses on how to improve their marketing efforts. This can
              include conducting marketing audits to identify strengths and
              weaknesses, developing marketing strategies, providing training
              and coaching to staff, and monitoring and evaluating marketing
              performance.
            </p>
            <Quote
              heading="advantages of marketing consultation"
              text="The benefits of marketing activities and consultations include increased brand awareness, improved customer engagement and loyalty, increased lead generation and sales, and a better return on investment (ROI) for marketing spend. "
            />
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <img
            src={pic1}
            alt="marketing consultation"
            className="mx-auto"
          ></img>
          <p className="mt-8">
            By working with experienced marketing professionals, businesses can
            gain access to specialized knowledge and expertise, as well as
            unbiased perspectives on their marketing challenges and
            opportunities.
          </p>
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

export default MConsultation;
