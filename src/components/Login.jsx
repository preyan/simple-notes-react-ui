import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Login</h1>
      <form className='w-1/3'>
        <input
          type='text'
          placeholder='Email or Username'
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        ></input>

        <button
          type='submit'
          className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
