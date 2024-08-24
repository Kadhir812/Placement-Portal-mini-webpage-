import React from "react";

const Sidebar = () => {
  return (
    <div className="h-1/1 w-64 bg-lime-800 text-white shadow-lg flex flex-col">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold">My Portal</h1>
      </div>
      <nav className="flex flex-col mt-10 space-y-4">
        <a href="#" className="flex items-center py-2 px-6 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6-9-6-9 6z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M21 14l-9 6-9-6"></path></svg>
          Dashboard
        </a>
        <a href="#" className="flex items-center py-2 px-6 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 22.935a12 12 0 01-6.16-12.356L12 14z"></path></svg>
          Profile
        </a>
        <a href="#" className="flex items-center py-2 px-6 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h4M8 12H4m4 0V4m0 8v8m0-8h4m-4 0H4"></path></svg>
          Jobs
        </a>
        <a href="#" className="flex items-center py-2 px-6 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8 8 0 1118.12 4.803a8 8 0 01-12.999 13.001z"></path></svg>
          Applications
        </a>
        <a href="#" className="flex items-center py-2 px-6 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7a3 3 0 00-3 3v4a3 3 0 003 3h10a3 3 0 003-3v-4a3 3 0 00-3-3H7z"></path></svg>
          Settings
        </a>
      </nav>
      <div className="mt-auto flex items-center justify-center h-16 bg-gray-900">
        <a href="#" className="flex items-center py-2 px-6 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <svg className="w-5 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.5 15H15v2zm-6 0v-2H5.5a2.032 2.032 0 01-1.495-.595L2.5 15h5v2zM10 9v2h4V9h-4zm-3 6v2H5.5a2.032 2.032 0 01-1.495-.595L2.5 15h5v2zm14-7h-5v2h5V8zm0 4h-5v2h5v-2z"></path></svg>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
