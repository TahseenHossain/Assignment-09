import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [signInError, setSignInError] = useState("");

  const { createUser } = useContext(AuthContext);


  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(photo, name, email, password);

    if(!password.match(/[A-Z]/) && !password.match(/[!@#$%^&*()_+]/)){
      toast.error("We need an Upper Case and Special Character")
      return;
    }
    
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
        toast.success("Sign Up Successful");
      })
      .catch((error) => {
        e.target.reset();
        console.error(error);
        setSignInError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold my-10">Sign Up Now!</h1>
      <form
        className="text-center items-center max-w-xl mx-auto"
        onSubmit={handleSignIn}
      >

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo URL"
            className="input input-bordered"
            
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF477E] hover:bg-pink-400 text-white">
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex flex-col text-center pb-8">
        <p className="text-2xl my-4">Already Have An Account</p>
        <Link to="/LogIn">
          <button className="btn bg-[#FF477E] hover:bg-pink-400 text-white">
            Log In
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
