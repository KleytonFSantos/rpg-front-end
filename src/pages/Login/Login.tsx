import Input from '../../components/Input'
import { User, Lock } from "phosphor-react";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-600">  
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-my-black rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-light-blue sm:text-2xl ">
                Welcome Back
            </div>
            <div className="mt-8">
              <form action="#" autoComplete="off">
                <div className="flex flex-col mb-2">
                 <Input 
                 icon={<User />}
                 placeholder="Your Login"
                 />                 
                </div>
                <div className="flex flex-col mb-6">
                  <Input 
                  icon={<Lock />}
                  placeholder="Your Password"
                  />                   
                </div>
                <div className="flex items-center mb-6 -mt-4">
                    <div className="flex ml-auto">
                        <a href="#" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                            Forgot Your Password?
                        </a>
                    </div>
                </div>
                <Button />
              </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <a href="#" target="_blank" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span className="ml-2">
                        You don&#x27;t have an account?
                        <Link className='ml-1 inline-flex text-light-blue font-bold' to='/signup'>Create an account</Link>
                    </span>
                </a>
            </div>
        </div>
      </div>
  )
}

export default Login