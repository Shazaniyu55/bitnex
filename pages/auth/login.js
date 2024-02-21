import React, { useRef, useState } from "react";
import { styles } from "../../components/styles";
import Link from "next/link"
import {useRouter} from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import {signInFailure,signInStart,signInSuccess,signoutSuccess} from '../../store/slice/userSlice'

const Login = ()=>{

  const navigate = useRouter()

  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

 // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };



   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:2600/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate.push('/admin/dashboard');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

    return(
        <div className="flex justify-center items-center m-20">
            <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={styles.sectionSubText}>Bitnex Fx</p>
            <h3 className={styles.sectionHeadText}>Login.</h3>
            <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
        
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              id='email'
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Password</span>
            <input
              type='password'
              id='password'
              onChange={handleChange}
              placeholder="Password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Don't have an account? <Link href="/auth/signup">SignUp</Link></span>

            </label>

         

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? (
                <>
                  
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Login'
              )}
          </button>
        </form>

            </div>
        </div>
    )
}

export default Login