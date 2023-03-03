import React from "react";
import pic1 from "../assets/mactivities.png";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MActivities = () => {
  return (
    <section id="marketing-activities" className="p-default pt-24">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-24">
        <div className="grid grid-cols-12 sm:gap-x-4 md:gap-x-0">
          <div className="h-full bg-line bg-top bg-cover"></div>
          <div className="col-span-11 ml-4 lg:ml-[3vw]">
            <h2 className="uppercase">marketing activities</h2>
            <p className="mt-4">
              Marketing activities can include a range of tactics, such as
              advertising, public relations, social media, content marketing,
              and events.
            </p>
            <p className="mt-4">
              The organization of marketing activities involves developing a
              marketing plan, setting goals and objectives, determining target
              audiences, selecting appropriate channels, creating compelling
              content, and measuring the success of the campaign.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={pic1} alt="marketing activities" className="mx-auto"></img>
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

export default MActivities;
