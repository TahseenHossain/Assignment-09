import { useEffect, useState } from "react";
import Service from "../Service/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
      AOS.init();
  }, []);

  return (
    <div className="mb-24">
      <h3 className="text-7xl lg:text-7xl text-center text-[#FF477E] mb-12">
        Our Services
      </h3>
      <div className="flex justify-center mb-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-5 lg:gap-16" data-aos="fade-up" data-aos-duration="10000">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
