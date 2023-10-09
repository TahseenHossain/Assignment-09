import { useEffect, useState } from "react";
import Theme from "../Theme/Theme";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Themes = () => {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch("Themes.json")
          .then((res) => res.json())
          .then((data) => setThemes(data));
          AOS.init();
      }, []);

  return (
    <div className="mb-24">
      <h3 className="text-7xl lg:text-7xl text-center text-[#FF477E] mb-12">
        Get Your Favourite Theme
      </h3>
      <div className="flex justify-center mb-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"  data-aos="fade-up" data-aos-duration="10000">
          {themes.map((theme) => (
            <Theme key={theme.id} theme={theme}></Theme>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
