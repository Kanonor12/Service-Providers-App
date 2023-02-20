import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import profile from '../assets/profile.jpeg'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    // eslint-disable-next-line no-unused-expressions
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isServiceProvider: true,
    imgUrl: profile
  };

  return (
    <div className={`${active ? 'bg-white text-gray-600' : 'bg-blue-800 text-white'} sticky top-0 flex flex-col`}>
      <div className="container mx-auto flex justify-between items-center px-0 py-5">
        <div className="text-3xl font-bold">
          <span className="">ServiceHub</span>
          <span className="text-4xl text-red-600">.</span>
          <span className="text-4xl text-green-800">X</span>
        </div>
        <div className="flex gap-6 items-center font-medium">
          <span>Our Business</span>
          <span>Explore</span>
          <span>Blog</span>
          {!currentUser && <span>Sign in</span>}
          {!currentUser?.isServiceProvider && <span>List your Service</span>}
          {!currentUser && <button type="button" className={`p-2 ${active ? 'border-gray-500' : 'border-white'}  border-2 rounded bg-transparent hover:bg-blue-600`}>Join</button>}
          {currentUser &&(
            <div className='relative flex items-center gap-2.5 cursor-pointer' onClick={() => setOpen(!open)}>
              <Image src={currentUser.imgUrl} alt="profile" className='w-8 h-8 rounded-full object-cover' />
              <span>{currentUser.username}</span>
              {open && (<div className='absolute top-12 border-gray-500 rounded-xl border-2 p-5 flex flex-col gap-3 bg-white text-gray-500 font-light min-w-max'>
                {currentUser?.isServiceProvider && (
                    <>
                    <span>My Services</span>
                    <span>Add New Service</span>
                    </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>            
             </div>)}
            </div>,
          )}
        </div>
      </div>
      { active && (
        <>
          <hr className="border-gray-500 h-0 bottom-1 w-min-max" />
          <div className="container py-2.5 mx-auto flex justify-between text-gray-600 font-light">
            <span>Test1</span>
            <span>Test2</span>
          </div>
        </>
      )}

    </div>
  );
};

export default Navbar;
