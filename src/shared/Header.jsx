import { SiGooglekeep } from 'react-icons/si';
import { ImSearch } from 'react-icons/im';
import { MdAccountCircle, MdRefresh } from 'react-icons/md';
import { CiViewList } from 'react-icons/ci';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { MdOutlineSettings } from 'react-icons/md';
import { IoAppsOutline } from 'react-icons/io5';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import Login from '../components/Login';

// This component represents the header section of a user interface.
const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginButton = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className='bg-white flex items-center justify-between w-full px-4 py-2 border-b border-gray-200'>
        {isLoggedIn ? (
          <>
            {/* Left side elements */}
            <div className='flex items-center'>
              {/* Button with Google Keep logo */}
              <button className='text-gray-400 p-2'>
                <SiGooglekeep className='w-9 h-9 text-yellow-400' />
              </button>
              {/* Text label for Google Keep */}
              <span className='text-lg font-medium text-gray-900'>Keep</span>
            </div>
            {/* Middle elements - Search Bar */}
            <form>
              <div className='relative text-gray-600 focus-within:text-gray-400'>
                {/* Icon button for search */}
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button
                    type='submit'
                    className='p-1 focus:outline-none focus:shadow-outline'
                  >
                    {/* Magnifying glass icon */}
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      viewBox='0 0 24 24'
                      className='w-6 h-6'
                    >
                      <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                  </button>
                </span>
                {/* Search input field */}
                <input
                  type='search'
                  name='q'
                  className='py-2 text-sm text-black bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 focus:shadow-md focus:border-gray-400 focus:border-b'
                  placeholder='Search...'
                  autoComplete='off'
                />
              </div>
            </form>
            {/* Right side elements */}
            <div className='flex items-center'>
              {/* Group of buttons with tooltips */}
              <div className='group flex relative'>
                {/* Search button */}
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <ImSearch className='w-5 h-5 ' />
                  {/* Tooltip for search button */}
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    Search
                  </span>
                </button>
              </div>

              {/* Repeat the above pattern for each button in the header */}
              {/* Refresh button */}
              <div className='group flex relative'>
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <MdRefresh className='w-6 h-6' />
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    Refresh
                  </span>
                </button>
              </div>

              {/* List view button */}
              <div className='group flex relative'>
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <CiViewList className='w-6 h-6 ' />
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    List View
                  </span>
                </button>
              </div>

              {/* Grid view button */}
              <div className='group flex relative'>
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <HiOutlineViewGrid className='w-6 h-6 ' />
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    Grid View
                  </span>
                </button>
              </div>

              {/* Settings button */}
              <div className='group flex relative'>
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <MdOutlineSettings className='w-6 h-6 ' />
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    Settings
                  </span>
                </button>
              </div>

              {/* All Apps button */}
              <div className='group flex relative'>
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <IoAppsOutline className='w-6 h-6 ' />
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    All Apps{' '}
                  </span>
                </button>
              </div>

              {/* Profile button */}
              <div className='group flex relative'>
                <button className='text-gray-400 p-3 hover:bg-gray-300 hover:text-gray-700 hover:rounded-full'>
                  <MdAccountCircle className='w-6 h-6 ' />
                  <span className='group-hover:opacity-80 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0'>
                    Profile
                  </span>
                </button>
              </div>
            </div>{' '}
          </>
        ) : (
          <>
            {/* Left side elements */}
            <div className='flex items-center'>
              {/* Button with Google Keep logo */}
              <Button
                pill
                className=' w-11 h-11 bg-transparent border border-transparent enabled:hover:bg-transparent focus:ring-0 focus:ring-transparent dark:focus:ring-transparent'
              >
                <SiGooglekeep className='w-11 h-11 text-yellow-400 hover:bg-transparent' />
              </Button>
              {/* Text label for Google Keep */}
              <span className='text-lg font-medium text-gray-900'>Keep</span>
            </div>
            {/* Right side elements */}
            <div className='flex items-center'>
              {/* Login button */}
              <Button
                className='text-white p-1 bg-yellow-400 text-lg rounded-full border border-transparent enabled:hover:bg-yellow-500 focus:ring-0 focus:ring-transaparent dark:focus:ring-transparent'
                onClick={handleLoginButton}
              >
                Login
              </Button>
            </div>
          </>
        )}
      </header>
      <Login
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
    </>
  );
};

export default Header;
