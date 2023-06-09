import React, { useContext, useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/5f439d47777cdb0004f2ecae.png';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../context/langContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
 
    const { establecerLenguaje } = useContext(langContext);
  
    const cambiarIdioma = (idioma) => {
      establecerLenguaje(idioma);
    };
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
    
      </div>
      
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
      <button onClick={() => cambiarIdioma("es-MX")}>Español</button>
      </li>
      <button onClick={() => cambiarIdioma("en-US")}>English</button> 
        <li>
          <Link to='home' smooth={true} duration={500}>
          <FormattedMessage
            id="app.home"
            defaultMessage="Home"
            />
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
          <FormattedMessage
            id="app.about"
            defaultMessage="About"
            />
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
          <FormattedMessage
            id="app.technologies"
            defaultMessage="Technologies"
            />
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
          <FormattedMessage
            id="app.projects"
            defaultMessage="Projects"
            />
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
          <FormattedMessage
            id="app.contact"
            defaultMessage="Contact"
            />
          </Link>
        </li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          <FormattedMessage
            id="app.home"
            defaultMessage="Home"
            />
         
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          <FormattedMessage
            id="app.about"
            defaultMessage="About"
            />
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          <FormattedMessage
            id="app.technologies"
            defaultMessage="Technologies"
            />
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          <FormattedMessage
            id="app.projects"
            defaultMessage="Projects"
            />
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          <FormattedMessage
            id="app.contact"
            defaultMessage="Contact"
            />
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/franco-hermosilla-70420b1a9/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/FrancoNicolas1'
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>  
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
