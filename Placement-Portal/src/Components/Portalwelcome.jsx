import React from 'react';

const PortalWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-100 h-full">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Placement Portal</h1>
      <img 
        src="../public/OIP.jpeg" 
        alt="Placement Portal" 
        className="w-1/4 mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-4">
        This portal is designed to help you navigate through various job opportunities. Whether you're looking for internships, full-time positions, or industry-specific roles, our platform provides the tools you need to make informed decisions.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
        Use the filters below to refine your job search by skills, salary, or company name. Stay ahead in your career journey by applying to the best opportunities available!
      </p>
    </div>
  )
};

export default PortalWelcome;
