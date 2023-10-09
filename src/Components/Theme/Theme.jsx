import { Link } from "react-router-dom";

const Theme = ({theme}) => {
    const { id, title, img, small_description } = theme;
  return (
    <div>
      <div className="card card-compact w-96 h-96 md:w-80 md:h-72 lg:w-96 lg:h-96 bg-base-100 rounded-lg">
        <figure>
          <img
            src={img}
            alt={title}
            className="w-96 h-60 md:w-80 md:h-48 lg:w-96 lg:h-60"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-5xl">{title}</h2>
          <h3 className="text-3xl">{small_description}</h3>
          <div className="card-actions justify-end">
            {/* <Link to= {`/`}>
              <button className="btn bg-[#FF477E] hover:bg-pink-400 text-white">
                Home
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;