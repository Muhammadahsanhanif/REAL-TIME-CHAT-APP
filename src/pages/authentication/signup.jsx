import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {

  const [signupData, setsignupData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmpassword: ''
  })
  const handleChange = (e) => {

    setsignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  }
  console.log(signupData);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e141b] px-4">
      <div className="bg-[#1c1f26] p-6 rounded-lg shadow-lg w-full max-w-sm text-white">
        <h2 className="text-xl font-semibold text-center mb-6">Create Account</h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#2a2e38]">
            <User size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#2a2e38]">
            <User size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Username"
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

          {/* Confirm Password */}
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#2a2e38]">
            <Lock size={18} className="text-gray-400 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-black font-semibold py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
