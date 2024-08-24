import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Total Applications</h2>
          <p className="mt-2 text-gray-600">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Job Offers</h2>
          <p className="mt-2 text-gray-600">10</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Interviews Scheduled</h2>
          <p className="mt-2 text-gray-600">30</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
