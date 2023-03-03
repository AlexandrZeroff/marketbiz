import React from "react";
import Service from "../blocks/Service";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";

const ServiceList = () => {
  const services = [
    {
      header: "Logistic services",
      image: service1,
      link: "logistic",
    },
    {
      header: "SaaS development services",
      image: service2,
      link: "saas-development",
    },
    {
      header: "IT outsourcing and outstaffing",
      image: service3,
      link: "it-outsorcing",
    },
    {
      header: "Business consultation",
      image: service4,
      link: "business-consultation",
    },
    {
      header: "Marketing activities",
      image: service5,
      link: "marketing-activities",
    },
    {
      header: "Marketing consultation",
      image: service6,
      link: "marketing-consultation",
    },
  ];
  return (
    <div className="pt-8 md:pt-16 flex items-center flex-wrap justify-center md:grid grid-cols-2 xl:grid-cols-3 gap-8 md:mx-auto md:max-w-3xl xl:max-w-none">
      {services.map((service, index) => (
        <Service
          key={index}
          header={service.header}
          image={service.image}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default ServiceList;
