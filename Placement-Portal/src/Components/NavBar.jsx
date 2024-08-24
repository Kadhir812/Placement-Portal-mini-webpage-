import React, { useState } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:3000/companies/search', {
        params: { name: searchTerm },
      });
      setSearchResults(response.data);
    } catch (error) {
      setError('Error searching for company');
      console.error('Error searching for company:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-pink-800 text-white flex items-center justify-between px-4 py-2">
        <div className="text-2xl font-bold">Dashboard</div>
        <div>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search Companies,LPA,Location..."
              className="w-72 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <div className="font-bold">Kadhir</div>
          <div className="bg-gray-700 p-2 rounded-full"></div>
        </div>
      </div>

      {loading && <div className="bg-gray-800 text-white p-4">Loading...</div>}
      {error && <div className="bg-red-500 text-white p-4">{error}</div>}
      {searchResults.length > 0 && (
        <div className="bg-gray-800 text-white p-4">
          <ul>
            {searchResults.map((company) => (
              <li key={company.id} className="p-2 border-b border-gray-700">
                {company.name} - {company.lpa} LPA - {company.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
