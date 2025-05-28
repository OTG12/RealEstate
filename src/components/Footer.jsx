import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowCircleUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  const { darkMode, toggleDarkmode } = useDarkMode();

  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>About Us</h1>
          <p className='text-justify text-slate-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam blanditiis officiis atque quis optio dolores itaque cumque ipsa id? Porro?</p>
          <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <div key={i} className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                <Icon className='size-5' />
              </div>
            ))}
          </div>
          <h1 className='text-white mt-8'>Copyright Real Estate Reserved</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-2x1 text-white font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200 '>13, Shasha RD, Lagos</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200 '>+2348120013544</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5' />
            <p className='text-slate-200 '>5256 2526</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5' />
            <p className='text-slate-200 '>oteneezekiel04@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src="/images/Prop7.webp" alt="Villa 1" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Villa with amazing view</h1>
              <p className='text-slate-400'>NGN 55,000,000</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src="/images/prop8.jpg" alt="Villa 2" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Villa with amazing view</h1>
              <p className='text-slate-400'>NGN 95,000,000</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top button */}
      <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowCircleUp className='size-6 text-white' />
        </Link>
      </div>

      {/* dark mode toggle */}
      <div>
        <button onClick={toggleDarkmode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkMode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black' />}
        </button>
      </div>
    </>
  );
};

export default Footer;
