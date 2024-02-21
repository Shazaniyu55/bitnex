import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} from '../../../store/slice/userSlice';
import React, {useState} from 'react';

export default function CardSetting() {
  const { currentUser,  error, loading} = useSelector((state) => state.user);
  console.log(currentUser)

  const dispatch = useDispatch();

  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlesubmit = async(e)=>{
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);

    if (Object.keys(formData).length === 0) {
      setUpdateUserError('No changes made');
      return;
    }
    

    try {
      dispatch(updateStart());
      const res = await fetch(`http://localhost:2600/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("User's profile updated successfully");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);
    }

  }


 

  return (
    <>
    <Navbar className='border-b-2 m-4 bg-secondary '>
      <Link
        href='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
        {currentUser.username}
        </span>
        Profile
      </Link>
      <form >
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
       
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link href={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link href='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link  as={'div'}>
          <Link href='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link  as={'div'}>
          <Link href='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link  as={'div'}>
          <Link href='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    <form onSubmit={handlesubmit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-secondary rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="lucky.jesse"
                    id='username'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-secondary rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="jesse@example.com"
                    id='email'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-secondary rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="username"
                    onChange={handleChange}
                    id='username'
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-secondary rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Jesse"
                  />
                </div>
              </div>
            </div>

            

           <Button
          type='submit'
          gradientDuoTone='purpleToBlue'
          outline
          
        >
          {loading ? 'Loading...' : 'Update'}
        </Button>
                
           
          </form>

    </>
  );
}