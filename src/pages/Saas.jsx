import React from "react";
import pic1 from "../assets/saas1.png";
import pic2 from "../assets/saas2.png";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Saas = () => {
  return (
    <section id="saas" className="p-default pt-24">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-24">
        <div className="grid grid-cols-12 sm:gap-x-4 md:gap-x-0">
          <div className="h-full bg-line bg-top bg-cover"></div>
          <div className="col-span-11 ml-4 lg:ml-[3vw]">
            <h2 className="uppercase">Saas development serwices</h2>
            <p className="mt-4">
              Our team can offer your business Software development services
              that involve the design, development, testing, and deployment of
              software applications that can be installed on a computer or
              mobile device. These applications can be tailored to meet your
              specific needs. The software development process typically
              involves coding, user interface design, and database integration.
            </p>
            <p className="mt-4">
              SaaS development services, on the other hand, involve the creation
              and delivery of software applications through the cloud. These
              applications can be accessed by users over the internet and do not
              require installation on a local device.
            </p>
            <img className="mt-4" src={pic1} alt="saas"></img>
            <p className="mt-4">
              Software and SaaS development services may also include additional
              features, such as user support, software maintenance, and data
              security. These services ensure that the software or SaaS
              application remains functional and up-to-date, reducing the risk
              of data breaches and other security issues.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={pic2} alt="saas" className="mx-auto"></img>
          <p className="mt-4">
            SaaS applications are typically subscription-based and provide
            businesses and individuals with access to a range of features and
            tools. Both software and SaaS development services provide a range
            of benefits, including increased efficiency, improved collaboration,
            and enhanced productivity. By developing custom software or SaaS
            applications, businesses can streamline their operations and
            automate manual processes.
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

export default Saas;
