import { useEffect, useState } from "react";
import About from "../About/About";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    fetch("AboutUs.json")
      .then((res) => res.json())
      .then((data) => setAboutUs(data));
  }, []);

  return (
    <div className="mb-24">
      <h3 className="text-7xl lg:text-7xl text-center text-[#FF477E] mb-12">
      The Journey of Two Visionary Entrepreneurs
      </h3>
      <div className="mb-12">       
          {aboutUs.map((about) => (
            <About key={about.id} about={about}></About>
          ))}
      </div>
    </div>
  );
};

export default AboutUs;
