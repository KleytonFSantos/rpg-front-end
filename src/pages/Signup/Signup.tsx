import { User, Lock, Envelope, Password } from "phosphor-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import {  FormikProvider, useFormik } from "formik";
import { registerSchema } from "../../schema/register";
import Input from "../../components/Input";
import ErrorMessage from "../../components/ErrorMessage";



export default function Singup () {

  const registerForm = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="w-full font-nunito h-screen flex items-center justify-center bg-tower-signup bg-no-repeat bg-cover">
      <div className="flex flex-col w-full bg-opacity-80 max-w-md px-4 py-8 bg-my-black rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-light-blue sm:text-2xl ">
          Start Your Journey
        </div>
        
        <div className="mt-6">        
          <FormikProvider value={registerForm}>
            <form onSubmit={registerForm.handleSubmit}>
              {registerForm.errors.userName && registerForm.touched.userName ?(
                <ErrorMessage textMessage={registerForm.errors.userName} />
                ) 
              : registerForm.errors.email && registerForm.touched.email ?(
                <ErrorMessage textMessage={registerForm.errors.email} />
                  ) 
                  : registerForm.errors.password && registerForm.touched.password ? (
                      <ErrorMessage textMessage={registerForm.errors.password} />
                    ) 
                      : registerForm.errors.confirmPassword && registerForm.touched.confirmPassword ? (
                          <ErrorMessage textMessage={registerForm.errors.confirmPassword} />
                        ) 
                        : registerForm.errors.userName && registerForm.touched.userName && registerForm.errors.email && registerForm.touched.email && registerForm.errors.password && registerForm.touched.password && registerForm.errors.confirmPassword && registerForm.touched.confirmPassword ? (
                            <ErrorMessage textMessage="Digite os dados para se cadastrar." />
                          ) 
                          : null
              }
            <div className="flex flex-col mb-2">
              <div className='flex relative font-nunito'>
                <Input
                  inputType="text"
                  onChanges={registerForm.handleChange}
                  name="userName"
                  values={registerForm.values.userName}
                  className="flex relative font-nunito w-full"
                  icon={<User />} 
                  placeholder="Your Name" 
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className='flex relative font-nunito'>
                <Input
                  inputType="email"
                  onChanges={registerForm.handleChange}
                  name="email"
                  values={registerForm.values.email}
                  className="flex relative font-nunito w-full"
                  icon={<Envelope />} 
                  placeholder="Your Email" 
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className='flex relative font-nunito'>
                <Input
                  inputType="password"
                  onChanges={registerForm.handleChange}
                  name="password"
                  values={registerForm.values.password}
                  className="flex relative font-nunito w-full"
                  icon={<Lock />} 
                  placeholder="Your Password" 
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className='flex relative font-nunito'>
                <Input
                  inputType="password"
                  onChanges={registerForm.handleChange}
                  name="confirmPassword"
                  values={registerForm.values.confirmPassword}
                  className="flex relative font-nunito w-full"
                  icon={<Password />} 
                  placeholder="Confirm Your Password" 
                />
              </div>
            </div>
            <Button
            buttonText="Sign Up" 
            className="py-3 px-4 bg-light-blue hover:bg-light-blue-hover focus:ring-light-blue focus:ring-offset-transparent text-my-black w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "/>
            </form>
          </FormikProvider>  
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