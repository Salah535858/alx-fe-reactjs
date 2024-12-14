import axios from 'axios';

// Function to fetch user data based on GitHub username and advanced filters (location, minRepos)
export const fetchUserData = async (username, location, minRepos) => {
    // eslint-disable-next-line no-useless-catch
    try {
        let query = username ? `user:${username}` : ''; // Start query with the username
        if (location) {
            query += ` location:${location}`; // Add location to the query if provided
        }
        if (minRepos) {
            query += ` repos:>${minRepos}`; // Add minimum repositories filter to the query if provided
        }

        // Make the API call with the constructed query
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        return response.data.items; // Return the list of users matching the query
    } catch (error) {
        throw error; // Throw the error if the API call fails
    }
};
