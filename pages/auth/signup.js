import React, { useRef, useState } from "react";
import { styles } from "../../components/styles";
import Link from "next/link";
import  {useRouter} from 'next/router'


const SignUp = ()=>{
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter()
  //const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('http://localhost:2600/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate.push('/auth/login');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

    return(
        <div className="flex justify-center items-center m-20">
            <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={styles.sectionSubText}>Bitnex Fx</p>
            <h3 className={styles.sectionHeadText}>SigUp.</h3>
            <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
           <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Upload photo</span>
            <input
              type='file'
              name='file'
              
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Full Name</span>
            <input
              type='text'
              id='username'
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
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
            <span className='text-white font-medium mb-4'>Confirm Password</span>
            <input
              type='password'
              id='cpassword'
              onChange={handleChange}
              placeholder="confirm password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Already have an account? <Link href="/auth/login">Login</Link></span>

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
                'Sign Up'
              )}
          </button>
        </form>

            </div>
        </div>
    )
}

export default SignUp