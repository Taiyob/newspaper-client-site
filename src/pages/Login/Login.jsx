import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/userLogin.json";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const [registers, setRegister] = useState(false);
  const { googleSignup, createUser, login, updateUserProfile, loader } =
    useAuth();
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const from = location?.state?.from?.pathname || "/";

  // For Registration Area
  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Just wait.....");
    try {
      const image = data?.image && data?.image[0];
      console.log(image);
      const imageData = await imageUpload(image);
      console.log(imageData?.data?.display_url);
      const result = await createUser(data?.email, data?.password);
      console.log(result.user);
      if (result?.user) {
        const userUpdateData = await updateUserProfile(
          data?.name,
          imageData?.data?.display_url
        );
        toast.success("Your registration completed successfully", {
          id: toastId,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // For Login Area
  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Just wait.....");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    reset();
    try {
      const result = await login(email, password);
      if (result?.user?.email) {
        toast.success("You are logging in successfully", { id: toastId });
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error(err.message, { id: toastId });
      setErrorLogin("Something is wrong:", err.message);
    }
  };

  // From Google Login || Registration
  const handleGoogleAuth = async () => {
    const res = await googleSignup();
    console.log(res?.user);
    if (res?.user?.email) {
      toast.success("You are logging in successfully");
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="flex px-20 justify-center items-center">
      <div className="flex-1   w-full mx-auto lg:w-[800px] bg-white flex items-center group relative overflow-hidden shadow-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`p-8 w-full lg:w-1/2 ${
            registers ? "translate-x-0" : "-translate-x-full"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-4xl pb-4">Register</h1>
          <div className="space-y-5">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
              placeholder="Jhon Doe"
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md  invalid:border-red-700 valid:border-black"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600">Name is required</p>
            )}
            <label htmlFor="u_email" className="block">
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="example@example.com"
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md  invalid:border-red-700 valid:border-black"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is required</p>
            )}
            <label htmlFor="u_password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              aria-invalid={errors.password ? "true" : "false"}
              placeholder=".............."
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">
                Here must be given minimum 6 characters, a capital letter, a
                special character, a numeric character
              </p>
            )}
            {errors.password?.type === "required" && (
              <span role="alert">This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span role="alert">This field length is 6</span>
            )}
            {errors.password?.type === "pattern" && (
              <span role="alert">Follow the pattern</span>
            )}
            <label htmlFor="name" className="block">
              Image
            </label>
            <input
              id="image"
              type="file"
              {...register("image", { required: true })}
              aria-invalid={errors.image ? "true" : "false"}
            />
            {errors.image?.type === "required" && (
              <p className="text-red-600">Please select an image</p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block"
          >
            {loader ? (
              <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> // animate-ping
            ) : (
              "Register"
            )}
          </button>
          <p className="mb-3 text-center">
            Already have an account?
            <Link
              onClick={() => {
                setRegister(!registers);
              }}
              className="underline"
            >
              Login
            </Link>
          </p>
          <hr />
          <button
            onClick={handleGoogleAuth}
            type="button"
            className="flex gap-2 py-2 px-5 mb-4 mt-8 mx-auto shadow-lg border rounded-md border-black"
          >
            <FcGoogle className="h-6 w-6" />
            {loader ? (
              <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> // animate-ping
            ) : (
              "Continue Google"
            )}
          </button>
        </form>

        <div
          className={`absolute w-1/2 h-full top-0 z-50 min-h-full duration-500 overflow-hidden hidden lg:block  bg-sky-500 ${
            registers
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
          onSubmit={handleLogin}
          className={`p-8 w-full lg:w-1/2 mr-0 ml-auto duration-500 ${
            registers ? "translate-x-full" : ""
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
              name="email"
              placeholder="example@example.com"
              required
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            {errorLogin && (
              <p className="text-red-600" role="alert">
                {errorLogin}
              </p>
            )}
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder=".............."
              required
              className="p-3 block w-full drop-shadow-lg outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            {errorLogin && (
              <p className="text-red-600" role="alert">
                {errorLogin}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block"
          >
            {loader ? (
              <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> // animate-ping
            ) : (
              "Login"
            )}
          </button>
          <p className="mb-3 text-center">
            Do not have an account?
            <Link
              onClick={() => {
                setRegister(!registers);
              }}
              className="underline"
            >
              Register
            </Link>
          </p>
          <hr />
          <button
            onClick={handleGoogleAuth}
            type="button"
            className="flex gap-2 py-2 px-5 mb-4 mt-8 mx-auto shadow-lg border rounded-md border-black"
          >
            <FcGoogle className="h-6 w-6" />
            {loader ? (
              <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> // animate-ping
            ) : (
              "Continue Google"
            )}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <Lottie
          className="h-[800px]"
          animationData={loginAnimation}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default Login;
