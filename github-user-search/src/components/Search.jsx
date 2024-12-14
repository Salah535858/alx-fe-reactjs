import { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API call function

const Search = () => {
    const [username, setUsername] = useState(''); // State for the username input
    const [location, setLocation] = useState(''); // State for the location input
    const [minRepos, setMinRepos] = useState(''); // State for the minimum repositories input
    const [user, setUser] = useState(null); // State for the user data from the API
    const [loading, setLoading] = useState(false); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Function to handle form submission and search for the user
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when search starts
        setError(null); // Clear previous errors

        try {
            const data = await fetchUserData(username, location, minRepos); // Call the API function with advanced filters
            setUser(data); // Set the fetched user data to state
        } catch (err) {
            setError('Looks like we can’t find the user'); // Set error message if API fails
        } finally {
            setLoading(false); // Set loading to false once the API call is done
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Search GitHub Users</h1>
            <form onSubmit={handleSearch} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Location (optional)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} // Update location state
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Min repositories (optional)"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)} // Update minRepos state
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <button type="submit" disabled={loading} className="w-full p-2 bg-blue-500 text-white rounded-md">
                    Search
                </button>
            </form>

            {loading && <p className="text-center mt-4">Loading...</p>} {/* Show loading message while fetching data */}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>} {/* Show error message if there is an error */}
            
            {user && !loading && !error && ( // Display user info if API call is successful
                <div className="mt-4">
                    <img src={user.avatar_url} alt={user.login} width="100" height="100" className="rounded-full mx-auto" />
                    <h2 className="text-xl font-semibold text-center mt-4">{user.name || user.login}</h2>
                    <p className="text-center mt-2">{user.bio || 'No bio available'}</p>
                    <p className="text-center mt-2">Location: {user.location || 'Not provided'}</p>
                    <p className="text-center mt-2">Repositories: {user.public_repos}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-600 mt-4">View GitHub Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;
