import React from "react";
import Userform from "../blocks/Userform";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import vector from "../assets/vector.png"

const Contacts = () => {
  return (
    <section id="contacts" className="p-default relative overflow-hidden">
      <img className="absolute bottom-12 -right-[60vw] hidden md:block" src={vector} alt=""></img>
      <h1 className="uppercase text-center mt-8">Ready for the next step?</h1>
      <h2 className="mt-8 uppercase text-center md:text-left">Contact us today!</h2>
      <div className="flex flex-col items-center md:grid grid-cols-2 md:gap-16 lg:gap-24 xl:gap-32 md:pb-48">
        <Userform />
        <div className="flex flex-col items-center my-16 md:mt-0 md:items-start">
          <h2>GET IN TOUCH</h2>
          <p className="mt-4">ADDRESS</p>
          <p className="mt-2 text-center md:text-left">
            Lazenda Warehouse 3, Jalan Ranca Ranca, 87000 F.T. Labuan,
            Malaysia. 
          </p>
          <p className="mt-4">SUPPORT</p>
          <a className="mt-2 text-center hover:text-th-secondary" href="tel:+60113454545">
            +60 11 345 45 45
          </a>
          <a className="mt-2 text-center hover:text-th-secondary" href="mailto:marketbizbiz@com">
            marketbizbiz@com
          </a>
          <p className="mt-4">CONTACT</p>
          <div className="flex items-center mt-2">
            <a href="#">
              <img src={facebook} alt="facebook"></img>
            </a>
            <a href="#" className="ml-2">
              <img src={linkedin} alt="linkedin"></img>
            </a>
            <a href="#" className="ml-2">
              <img src={twitter} alt="twitter"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
