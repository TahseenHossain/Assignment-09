import { useEffect, useState } from "react";
import Venue from "../Venue/Venue";

const Venues = () => {
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        fetch("Venue.json")
          .then((res) => res.json())
          .then((data) => setVenues(data));
      }, []);
      
   
  return (
    <div className="mb-24">
      <h3 className="text-7xl lg:text-7xl text-center text-[#FF477E] mb-12">
        Some of Our Most Common Venues
      </h3>
      <div className="flex justify-center mb-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-5 lg:gap-16">
          {venues.map((venue) => (
            <Venue key={venue.id} venue={venue}></Venue>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Venues;