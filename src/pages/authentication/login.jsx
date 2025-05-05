import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setloginData] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {

    setloginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }
  console.log(loginData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e141b] px-4">
      <div className="bg-[#1c1f26] p-6 rounded-lg shadow-lg w-full max-w-sm text-white">
        <h2 className="text-xl font-semibold text-center mb-6">Please Login..!!</h2>

        <form className="space-y-4">
          {/* Username */}
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#2a2e38]">
            <User size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#2a2e38]">
            <Lock size={18} className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-black font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
