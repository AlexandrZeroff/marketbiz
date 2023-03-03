import React from "react";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="p-default flex flex-col py-8 bg-th-primary">
        <img
          src={logo}
          alt="Marketbiz"
          className="w-36 mx-auto md:hidden"
        ></img>
        <div className="grid grid-cols-2 gap-2 mt-8 md:hidden">
          <div>
            <a href="#" className="text-white">
              Privacy policy
            </a>
            <a href="#" className="text-white mt-2 block">
              Terms and Conditions
            </a>
          </div>
          <div>
            <a href="#" className="text-white">
              Cookie policy
            </a>
            <a href="#" className="text-white mt-2 block">
              Cookie Setting
            </a>
          </div>
        </div>
        <h3 className="text-center text-white uppercase mt-8 hidden md:block">Get in touch</h3>
        <div className="grid-cols-2 gap-4 max-w-lg mx-auto mt-12 mb-16 hidden md:grid">
          <div className="flex items-center">
            <img src={mail} alt=""></img>
            <a className="ml-4 text-white" href="mailto:marketbizbiz@com">
              marketbizbiz@com
            </a>
          </div>
          <div className="flex items-start row-span-2">
            <img className="" src={location} alt=""></img>
            <p className="ml-4 text-white">
              LAzenda Warehouse 3, Jalan Ranca-Ranca, 87000 F.T. Labuan,
              Malaysia
            </p>
          </div>
          <div className="flex items-center">
            <img src={phone} alt=""></img>
            <a className="ml-4 text-white" href="tel:+60113454545">
              +60 11 345 45 45
            </a>
          </div>
        </div>
        <div className="items-center justify-between w-full hidden md:flex">
          <a href="#" className="text-white hover:text-th-secondary">
            Privacy policy
          </a>
          <a href="#" className="text-white hover:text-th-secondary">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-th-secondary">
            Cookie policy
          </a>
          <a href="#" className="text-white hover:text-th-secondary">
            Cookie Setting
          </a>
          <a href="#" className="text-white hover:text-th-secondary">
            Terms and Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
