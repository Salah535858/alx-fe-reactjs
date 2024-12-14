// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(''); // State for search input
  const [userData, setUserData] = useState(null); // State for user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(''); // State for error messages

  // Handle search input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission (search)
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await fetchUserData(username);
      setUserData(result); // Set user data in state
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub user"
          className="border px-2 py-1"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-1">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message while fetching data */}
      {error && <p>{error}</p>} {/* Show error message if user is not found */}

      {/* Display user data if available */}
      {userData && !loading && !error && (
        <div className="user-result">
          <img src={userData.avatar_url} alt="User Avatar" className="w-24 h-24" />
          <h2 className="text-xl">{userData.login}</h2>
          <p>{userData.name}</p>
          <p>{userData.location}</p>
          <p>Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}

      {/* If multiple results are found (for advanced search), display them using .map() */}
      {userData && Array.isArray(userData) && (
        <div className="user-list">
          {userData.map((user) => (
            <div key={user.id} className="user-card mb-4 p-4 border">
              <img src={user.avatar_url} alt="User Avatar" className="w-24 h-24" />
              <h3 className="text-lg">{user.login}</h3>
              <p>{user.name}</p>
              <p>{user.location}</p>
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
