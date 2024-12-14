import { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API call function

const Search = () => {
    const [username, setUsername] = useState(''); // State for the username input
    const [user, setUser] = useState(null); // State for the user data from the API
    const [loading, setLoading] = useState(false); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Function to handle form submission and search for the user
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when search starts
        setError(null); // Clear previous errors

        try {
            const data = await fetchUserData(username); // Call the API function
            setUser(data); // Set the fetched user data to state
        } catch (err) {
            setError("Looks like we cant find the user"); // Set error message if API fails
        } finally {
            setLoading(false); // Set loading to false once the API call is done
        }
    };

    return (
        <div>
            <h1>Search GitHub Users</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                />
                <button type="submit" disabled={loading}>Search</button>
            </form>

            {loading && <p>Loading...</p>} {/* Show loading message while fetching data */}
            {error && <p>{error}</p>} {/* Show error message if there is an error */}
            
            {user && !loading && !error && ( // Display user info if API call is successful
                <div>
                    <img src={user.avatar_url} alt={user.login} width="100" height="100" />
                    <h2>{user.name || user.login}</h2>
                    <p>{user.bio || 'No bio available'}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;
