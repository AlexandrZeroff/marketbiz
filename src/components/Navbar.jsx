import React, { useState } from "react";
import menu_open from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import arrow_back from "../assets/arrow_back.svg";
import arrow from "../assets/arrow.svg";
import arrow_sm from "../assets/arrow-sm.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleServices, setToggleServices] = useState(false);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  };
  const scroll = () => {
    const section = document.getElementById("services");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const closeAll = () => {
    setToggleMenu(false);
    setToggleServices(false);
    scroll()
  };

  return (
    <section
      id="start"
      className="absolute h-14 md:h-20 w-full top-0 right-0 z-50 bg-th-primary/75 flex items-center rounded-b-xl"
    >
      <div className="p-default flex items-center w-full md:justify-between">
        <a href="/">
          <img className="w-32" src={logo} alt="MarketBIZ"></img>
        </a>
        <nav className="hidden md:flex items-center">
          <AnchorLink href="#about" className="btn-transparent">
            About us
          </AnchorLink>
          <AnchorLink href="#contacts" className="btn-transparent ml-[2vw]">
            Contacts
          </AnchorLink>
          <AnchorLink href="#services" className="btn-transparent ml-[2vw]">
            Services
          </AnchorLink>
        </nav>
        <AnchorLink href="#contacts" className="hidden md:block btn-primary">
          Contact us
        </AnchorLink>
        {!toggleMenu && (
          <img
            className="w-8 ml-auto cursor-pointer md:hidden"
            src={menu_open}
            alt="Open menu"
            onClick={() => setToggleMenu(true)}
          ></img>
        )}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%", maxWidth: "100%" }}
              className="absolute w-full min-h-[100vh] top-14 right-0 bg-white flex flex-col z-30 rounded-b-xl"
            >
              <motion.div
                className="flex items-center justify-start h-16 px-4"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <img
                  className="mr-auto cursor-pointer md:hidden"
                  src={arrow_back}
                  alt=""
                  onClick={() => setToggleMenu(false)}
                ></img>
              </motion.div>
              <motion.nav
                className="nav-menu flex flex-col p-4 text-th-primary text-base"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <div className="flex items-center my-2 justify-between p-4">
                  <AnchorLink
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                  >
                    <h2>ABOUT US</h2>
                  </AnchorLink>
                  <AnchorLink
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                  >
                    <img src={arrow} alt="" className="w-4"></img>
                  </AnchorLink>
                </div>
                <div className="h-[1px] w-full bg-th-pale"></div>
                <div
                  className="relative flex items-center my-2 justify-between p-4 cursor-pointer"
                  onClick={() => setToggleServices(!toggleServices)}
                >
                  <h2 className="cursor-pointer">SERVICES</h2>
                  <img src={arrow} alt="" className="w-4 cursor-pointer"></img>
                </div>
                <AnimatePresence>
                  {toggleServices && (
                    <motion.article
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      className="w-full p-4"
                    >
                      <motion.div
                        initial="closed"
                        animate="open"
                        className="flex items-center my-2 justify-between p-2"
                      >
                        <Link to="logistic" onClick={closeAll}>
                          <h3>LOGISTIC SERVICES</h3>
                        </Link>
                        <Link to="logistic" onClick={closeAll}>
                          <img src={arrow_sm} alt="" className="w-2"></img>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="closed"
                        animate="open"
                        className="flex items-center my-2 justify-between p-2"
                      >
                        <Link to="saas-development" onClick={closeAll}>
                          <h3>SAAS DEVELOPMENT SERVICES</h3>
                        </Link>
                        <Link to="saas-development" onClick={closeAll}>
                          <img src={arrow_sm} alt="" className="w-2"></img>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="closed"
                        animate="open"
                        className="flex items-center my-2 justify-between p-2"
                      >
                        <Link to="it-outsorcing" onClick={closeAll}>
                          <h3>IT OUTSORCING AND OUTSTAFFING</h3>
                        </Link>
                        <Link to="it-outsorcing" onClick={closeAll}>
                          <img src={arrow_sm} alt="" className="w-2"></img>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="closed"
                        animate="open"
                        className="flex items-center my-2 justify-between p-2"
                      >
                        <Link to="business-consultation" onClick={closeAll}>
                          <h3>BUSINESS CONSULTATION</h3>
                        </Link>
                        <Link to="business-consultation" onClick={closeAll}>
                          <img src={arrow_sm} alt="" className="w-2"></img>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="closed"
                        animate="open"
                        className="flex items-center my-2 justify-between p-2"
                      >
                        <Link to="marketing-activities" onClick={closeAll}>
                          <h3>MARKETING ACTIVITIES</h3>
                        </Link>
                        <Link to="marketing-activities" onClick={closeAll}>
                          <img src={arrow_sm} alt="" className="w-2"></img>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="closed"
                        animate="open"
                        className="flex items-center my-2 justify-between p-2"
                      >
                        <Link to="marketing-consultation" onClick={closeAll}>
                          <h3>MARKETING CONSULTATION</h3>
                        </Link>
                        <Link to="marketing-consultation" onClick={closeAll}>
                          <img src={arrow_sm} alt="" className="w-2"></img>
                        </Link>
                      </motion.div>
                    </motion.article>
                  )}
                </AnimatePresence>
                <div className="h-[1px] w-full bg-th-pale"></div>
                <div className="flex items-center my-2 justify-between p-4">
                  <AnchorLink
                    href="#contacts"
                    onClick={() => setToggleMenu(false)}
                  >
                    <h2>CONTACT US</h2>
                  </AnchorLink>
                  <AnchorLink
                    href="#contacts"
                    onClick={() => setToggleMenu(false)}
                  >
                    <img src={arrow} alt="" className="w-4"></img>
                  </AnchorLink>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;
