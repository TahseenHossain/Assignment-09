import { useEffect, useState} from "react";
import Career from "../Career/Career";

const Careers = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch("Career.json")
      .then((res) => res.json())
      .then((data) => setCareers(data));
  }, []);

  return (
    <div className="mb-24">
      <h3 className="text-7xl lg:text-7xl text-center text-[#FF477E] mb-12">
        Job Opening
      </h3>
      <div className="mb-12">
        {careers.map((career) => (
          <Career key={career.id} career={career}></Career>
        ))}
      </div>
    </div>
  );
};

export default Careers;
