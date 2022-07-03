import Input from "../../components/Input";
import { User, Lock } from "phosphor-react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { loginSchema } from "../../schema/login";
import ErrorMessage from "../../components/ErrorMessage";

function Login() {

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <>
      <div className="w-full font-nunito h-screen flex items-center justify-center bg-tower-bg bg-no-repeat bg-cover">
        <div className="flex flex-col w-full bg-opacity-80 max-w-md px-4 py-8 bg-my-black rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-light text-light-blue sm:text-2xl ">
            Welcome Back
          </div>
          <div className="mt-8">
            <FormikProvider value={loginForm}>
              <form onSubmit={loginForm.handleSubmit}>
              { loginForm.errors.email && loginForm.touched.email ?(
                <ErrorMessage textMessage={loginForm.errors.email} />
                  ) 
                  : loginForm.errors.password && loginForm.touched.password ? (
                      <ErrorMessage textMessage={loginForm.errors.password} />
                    ) : null
              }
                <div className="flex flex-col mb-2">
                  <Input
                  name="email"
                  onChanges={loginForm.handleChange}
                  values={loginForm.values.email}
                  inputType="text"
                  className="flex relative font-nunito"
                  icon={<User />} 
                  placeholder="Your Login" 
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <Input
                  name="password"
                  onChanges={loginForm.handleChange}
                  values={loginForm.values.password}
                  inputType="password"
                  className="flex relative font-nunito"
                  icon={<Lock />} 
                  placeholder="Your Password" 
                  />
                </div>
                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto">
                    <Link
                      to="/forgot-password"
                      className="inline-flex text-xs font-thin text-gray-400 sm:text-sm hover:text-gray-300"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                </div>
                <Button 
                buttonText="Sign In"
                className="py-3 px-4  bg-light-blue hover:bg-light-blue-hover focus:ring-light-blue focus:ring-offset-transparent text-my-black w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "/>
              </form>
            </FormikProvider>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="inline-flex items-center text-xs font-thin text-center text-gray-400 hover:text-gray-300">
              <span className="ml-2">
                You don&#x27;t have an account?
                <Link
                  className="ml-1 inline-flex text-light-blue font-bold"
                  to="/signup"
                >
                  Create an account
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
