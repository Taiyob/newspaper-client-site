import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/userLogin.json";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="flex px-20 justify-center items-center">
      <div className="flex-1   w-full mx-auto lg:w-[800px] bg-white flex items-center group relative overflow-hidden shadow-xl">
        <form
          className={`p-8 w-full lg:w-1/2 ${
            register ? "translate-x-0" : "-translate-x-full"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-4xl pb-4">Register</h1>
          <div className="space-y-5">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="name"
              placeholder="Jhon Doe"
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md  invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="u_email" className="block">
              Email
            </label>
            <input
              id="u_email"
              type="u_email"
              placeholder="example@example.com"
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md  invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="u_password" className="block">
              Password
            </label>
            <input
              id="u_password"
              type="u_password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
          </div>

          <button
            type="button"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block"
          >
            Submit
          </button>
          <p className="mb-3 text-center">
            Already have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline"
            >
              Login
            </Link>
          </p>
          <hr />
          <button
            type="button"
            className="flex gap-2 py-2 px-5 mb-4 mt-8 mx-auto shadow-lg border rounded-md border-black"
          >
            <FcGoogle className="h-6 w-6" />
            Continue Google
          </button>
        </form>

        <div
          className={`absolute w-1/2 h-full top-0 z-50 min-h-full duration-500 overflow-hidden hidden lg:block  bg-sky-500 ${
            register
              ? "translate-x-full rounded-bl-full duration-500"
              : "rounded-br-full"
          }`}
        >
          <img
            src="https://source.unsplash.com/random"
            className="object-cover h-full"
            alt="img"
          />
        </div>

        <form
          className={`p-8 w-full lg:w-1/2 mr-0 ml-auto duration-500 ${
            register ? "translate-x-full" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
          </div>

          <button
            type="button"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block"
          >
            Submit
          </button>
          <p className="mb-3 text-center">
            Do not have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline"
            >
              Register
            </Link>
          </p>
          <hr />
          <button
            type="button"
            className="flex gap-2 py-2 px-5 mb-4 mt-8 mx-auto shadow-lg border rounded-md border-black"
          >
            <FcGoogle className="h-6 w-6" />
            Continue Google
          </button>
        </form>
      </div>
      <div className="flex-1">
      <Lottie className='h-[800px]' animationData={loginAnimation} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Login;
