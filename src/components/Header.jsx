import React from "react";
import Navbar from "./Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <section id="header" className="relative flex flex-col">
      <Navbar />
      <div className="w-full h-[58vh] md:h-[65vh] lg:h-[80vh] bg-center bg-auto md:bg-cover bg-header md:bg-header-md p-default">
        <h1 className="uppercase mt-24 lg:mt-32 max-w-[330px] lg:max-w-[430px] xl:max-w-[520px] hidden md:block text-white">
          Your successful business is our first priority
        </h1>
      </div>
      <h1 className="mt-8 text-center uppercase md:hidden">
        Your successful business is our first priority
      </h1>
      <AnchorLink className="btn-primary mx-auto mt-8 md:hidden" href="#contacts">Contact us</AnchorLink>
    </section>
  );
};

export default Header;
