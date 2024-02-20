import React from 'react';

const Login= () => {
  const handleLogin = () => {
    console.log('Logging in...');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <div className="border border-black bg-white p-6 rounded-lg shadow-lg w-96">
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
            <input type="text" id="username" name="username" className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input type="password" id="password" name="password" className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button type="button" onClick={handleLogin} className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">Login</button>
        </form>
      </div>
      <p className="mt-4">Already have an account? <a href="#" className="text-indigo-600 font-semibold">Sign in here</a></p>
    </div>
  );
};

export default Login;
