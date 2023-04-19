import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const SignUp = () => {

const {createUser}=useContext(AuthContext)

const [error,setError]=useState('')
const [success,setSuccess]=useState('')
    const handleSignUp = (e) => {
        e.preventDefault();
        setSuccess('')
        setError('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
      
        const confirmPassword = form.confirmPassword.value
        console.log(email, password, confirmPassword)


        if(password !== confirmPassword){
            setError('Your Password did not match')
            return
        }
        else if(password.length<6){
            setError('please add at least 6 characters in your password')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add at least one uppercase')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('please add at least two numbers ')
            return;
        }



        createUser(email,password)
        .then((result)=>{
            const loggedUser=result.user
            console.log(loggedUser)
            setError('')
            setSuccess('User has created successfully')
            form.reset()
           
        })
        .catch((error)=>{
            console.log(error.message)
            setError(error.message)
        })



    }




    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold"> Sign Up</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp} >
                  
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='mb-4 mx-auto text-center container px-4'>
        <Link to='/login' className="label-text-alt link link-hover text-lg">Already have an account?<span className='text-amber-400'>Login</span></Link>
                    </div>

<p className='text-yellow-400 text-center mb-2 px-4'>{error}</p>
<p className='text-green-600 px-4 text-center mb-2'>{success}</p>

                    <div className='flex justify-between items-center px-5 mb-4'>
                        <div className='border-t-4 border-indigo-500  w-[40%]'>

                        </div>
                        <div className='mb'>
                            <p> or</p>
                        </div>
                        <div className='border-t-4 border-indigo-500  w-[40%]'>

                        </div>
                    </div>


                    <button /* onClick={handleGoogleSing} */ className="btn btn-secondary"><FontAwesomeIcon icon={faIcons} /> Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;