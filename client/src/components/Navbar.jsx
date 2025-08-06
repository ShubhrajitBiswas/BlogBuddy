import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
    
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className='flex justify-between items-center py-4 px-4 sm:px-8 lg:px-16 xl:px-32 max-w-7xl mx-auto'>
        <img 
          onClick={() => navigate('/')}
          src={assets.logo} 
          alt="logo" 
          className='w-28 sm:w-36 lg:w-44 cursor-pointer hover:opacity-80 transition-opacity' 
        />
        <button 
          onClick={() => navigate('/admin')} 
          className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 sm:px-8 py-2.5 hover:bg-primary/90 transition-colors'
        >
          <span>Login</span>
          <img src={assets.arrow} alt="arrow" className='w-3' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
