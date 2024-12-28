import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Handle search term change and update results dynamically
  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Clear the previous debounce timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new debounce timer to trigger the search after 500ms of idle typing
    const timer = setTimeout(async () => {
      if (term.trim().length === 0) {
        setSearchResults([]); // Clear results when input is empty
        return;
      }

      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:3000/companies/search', {
          params: { name: term },
        });
        setSearchResults(response.data);
      } catch (error) {
        setError('Error searching for company');
        console.error('Error searching for company:', error);
      } finally {
        setLoading(false);
      }
    }, 500); // Delay for 500ms

    // Save the new timer reference
    setDebounceTimer(timer);
  };

  return (
    <div>
      <div className="bg-pink-800 text-white flex items-center justify-between px-4 py-2">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="relative"> {/* Wrap in relative for dropdown positioning */}
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
            <input
              type="text"
              placeholder="Search Companies, LPA, Location..."
              className="w-72 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange} // Call onChange handler for real-time search
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Search
            </button>
          </form>

          {/* Dropdown positioned under the input */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-72 bg-gray-800 text-white mt-1 rounded-md shadow-lg z-10">
              <ul>
                {searchResults.map((company) => (
                  <li
                    key={company.id}
                    className="p-2 border-b border-gray-700 hover:bg-gray-600 cursor-pointer"
                    onClick={() => setSearchTerm(company.name)} // Set company name in input when clicked
                  >
                    {company.name} - {company.lpa} LPA - {company.location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="font-bold"></div>
          <div className="bg-gray-700 p-2 rounded-full"></div>
        </div>
      </div>

      {loading && <div className="bg-gray-800 text-white p-4">Loading...</div>}
      {error && <div className="bg-red-500 text-white p-4">{error}</div>}
    </div>
  );
};

export default Navbar;
