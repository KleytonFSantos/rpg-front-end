import Header from '../../components/Header';
import Input from '../../components/Input';
import { Envelope } from 'phosphor-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import { forgotPasswordSchema } from '../../schema/forgotPassword';
import ErrorMessage from '../../components/ErrorMessage';
import React, { useState } from 'react';

function ForgotPass() {
    const [showError, setShowError] = useState(false);
    
    const forgotPassword = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: forgotPasswordSchema,
        onSubmit: (values) => {
          console.log(values);
        }
      });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setShowError(true);
        forgotPassword.handleSubmit(e);
    };

  return (
    <div className="w-full h-screen font-nunito justify-center bg-input-black overflow-hidden">  
       <Header />
       <FormikProvider value={forgotPassword}>
        <form onSubmit={onSubmit}>  
         <div className='flex item-center justify-center bg-tower-forgot-pass mt-12 w-full h-[500px] bg-cover bg-no-repeat'>
            <div className="flex items-center flex-col justify-center w-6/12">
                <span className='text-gray-100 text-3xl flex items-center'>Forgot Password</span>
                
                <span className='text-gray-300 text-lg flex items-center text-center mt-8'>Enter the email you signed up with below and we will send you a link to reset your password.</span>  
                {showError && forgotPassword.errors.email && forgotPassword.touched.email ? 
                    <div className="mt-6 w-[300px]">
                        <ErrorMessage textMessage={forgotPassword.errors.email}/> 
                    </div> : null
                }                          
                <Input
                inputType='email'
                name='email'
                onChanges={forgotPassword.handleChange}
                values={forgotPassword.values.email}
                className="mt-6 flex relative font-nunito w-[450px] h-12" 
                placeholder='You Email'
                icon={<Envelope />}
                />
                <Button
                buttonText='Request Reset Link '
                className="py-3 px-4 mt-8 bg-[#282c2d] hover:bg-input-focus text-gray-300 w-[300px] transition ease-in duration-200 text-sm opacity-90 font-semibold shadow-md h-12 focus:outline-none rounded ml-44"
                />
                <span className="mt-6 text-gray-200 text-sm">
                    Need an account?
                    <Link to='/signup' className='ml-1 inline-flex text-light-blue font-semibold'>Sign Up</Link>
                </span>
                <span className="mt-6 text-gray-200 text-sm">
                    Have an account?
                    <Link to='/login' className='ml-1 inline-flex text-light-blue font-semibold'>Sign In</Link>
                </span>          
            </div>
         </div>
        </form>
       </FormikProvider>
       <footer className='flex item-center justify-center bg-[#111313] w-full h-20 bg-cover bg-no-repeat'>
            
        </footer>
    </div>  
    )
}

export default ForgotPass