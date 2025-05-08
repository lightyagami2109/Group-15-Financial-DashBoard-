import React from 'react';


const Navbar = () => (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <span className="font-bold text-xl">GrowWise</span>
      <div>
        <a href="/" className="mr-4 text-indigo-600">Login</a>
        <a href="/signup" className="text-indigo-600">Signup</a>
      </div>
    </nav>
  );
  
  export default Navbar;