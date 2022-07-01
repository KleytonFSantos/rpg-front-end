import { User, Lock, Envelope, Password } from "phosphor-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Singup() {
  return (
    <div className="w-full font-nunito h-screen flex items-center justify-center bg-tower-signup bg-no-repeat bg-cover">
      <div className="flex flex-col w-full bg-opacity-80 max-w-md px-4 py-8 bg-my-black rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-light-blue sm:text-2xl ">
          Start Your Journey
        </div>
        <div className="mt-6">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <Input
              className="flex relative font-nunito" 
              icon={<User />} 
              placeholder="User Name" />
            </div>
            <div className="flex flex-col mb-2">
              <Input
              className="flex relative font-nunito" 
              icon={<Envelope />} 
              placeholder="Your Register Email" />
            </div>
            <div className="flex flex-col mb-2">
              <Input
              className="flex relative font-nunito" 
              icon={<Lock />} 
              placeholder="Your Password" />
            </div>
            <div className="flex flex-col mb-6">
              <Input
              className="flex relative font-nunito" 
              icon={<Password />} 
              placeholder="Confirm Your Password" />
            </div>
            <Button
            buttonText="Sign Up" 
            className="py-3 px-4 bg-light-blue hover:bg-light-blue-hover focus:ring-light-blue focus:ring-offset-transparent text-my-black w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "/>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <span className="ml-2 inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            You already have an account?
            <Link className="ml-1 inline-flex text-light-blue font-bold" to="/">
              Sing in.
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-center mt-2">
          <span className="ml-2 inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            Can&#x27;t sign in?
            <Link
              className="ml-1 inline-flex text-light-blue font-bold"
              to="/forgot-password"
            >
              Forgot Password
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Singup;
