import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, price, small_description } = service;
  return (
    <div>
      <div className="card card-compact w-96 h-96 md:w-[360px] lg:w-96 bg-base-100 rounded-lg">
        <figure>
          <img
            src={img}
            alt={name}
            className="w-96 h-60 md:w-[360px] lg:w-96"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-5xl">{name}</h2>
          <h3 className="sm:text-3xl md:text-2xl">{small_description}</h3>
          <h3 className="sm:text-3xl md:text-2xl">Price:${price}</h3>
          <div className="card-actions justify-end">
            <Link to= {`/service/${id}`}>
              <button className="btn bg-[#FF477E] hover:bg-pink-400 text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
