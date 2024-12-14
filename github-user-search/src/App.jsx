import { useState } from 'react'; // We still need to import useState

import { searchUsers } from './services/githubService'; // Import the search function from the service

const App = () => {
    const [query, setQuery] = useState(''); // State to store the input query
    const [users, setUsers] = useState([]); // State to store the users returned from the API

    // Function to handle the search
    const handleSearch = async () => {
        try {
            const data = await searchUsers(query); // Call the API function
            setUsers(data.items); // Set the users data to state
        } catch (error) {
            console.error('Error searching users:', error); // Handle any errors
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update the query state
                placeholder="Search GitHub users"
            />
            <button onClick={handleSearch}>Search</button> {/* Trigger search on click */}
            
            <ul>
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id}>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                {user.login}
                            </a>
                        </li>
                    ))
                ) : (
                    <li>No users found.</li> // If no users are found, display this message
                )}
            </ul>
        </div>
    );
};

export default App;
