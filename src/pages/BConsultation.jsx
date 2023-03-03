import React from "react";
import pic1 from "../assets/bconsultation.png";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const BConsultation = () => {
  return (
    <section id="business-consultation" className="p-default pt-24">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-24">
        <div className="grid grid-cols-12 sm:gap-x-4 md:gap-x-0">
          <div className="h-full bg-line bg-top bg-cover"></div>
          <div className="col-span-11 ml-4 lg:ml-[3vw]">
            <h2 className="uppercase">business consultation</h2>
            <p className="mt-4">
              Gain access to specialized expertise and knowledge, as well as
              unbiased perspectives on the operations and challenges. The scope
              of business consultation services can be broad and may include a
              range of areas, such as:
            </p>
            <ul className="list-disc text-sm lg:text-base mt-4 ml-4">
              <li className="mt-2">
                Strategic planning: Helping businesses develop long-term plans
                to achieve their goals and grow their operations.
              </li>
              <li className="mt-4">
                Financial management: Advising businesses on financial matters,
                such as budgeting, forecasting, and investment decisions.
              </li>
              <li className="mt-4">
                Operations management: Providing guidance on process
                improvement, supply chain management, and quality control.
              </li>
              <li className="mt-4">
                Marketing and sales: Assisting businesses with market research,
                branding, and sales strategies to increase revenue.
              </li>
              <li className="mt-4">
                Human resources: Providing guidance on talent management,
                recruitment, employee development, and HR policies and
                procedures.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={pic1} alt="business-consultation" className="mx-auto"></img>
          <p className="mt-4">
            Overall, business consultation services provide a valuable solution
            for businesses looking to improve their operations, overcome
            challenges, and achieve their strategic goals. 
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

export default BConsultation;
