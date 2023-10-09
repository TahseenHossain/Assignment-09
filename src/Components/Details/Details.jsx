import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((service) => service.id == id);
  console.log(service);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="hero bg-base-100 rounded-lg">
        <figure>
          <img src={service.img} alt={service.name} className="h-96" />
        </figure>
      </div>
      <div className="card-body" data-aos="fade-up" data-aos-duration="10000">
        <h2 className="card-title text-5xl text-[#FF477E]">{service.name}</h2>
        <h3 className="text-4xl">Price:${service.price}</h3>
        <h3 className="text-4xl">{service.small_description}</h3>
        <h3 className="text-2xl">{service.detail_description}</h3>
        <div className="card-actions justify-start">
          <Link to={`/`}>
            <button className="btn bg-[#FF477E] hover:bg-pink-400 text-white">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
