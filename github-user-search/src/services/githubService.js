import axios from 'axios';

// Function to fetch user data based on GitHub username
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data; // Return the user data from the API
    } catch (error) {
        throw error; // Throw the error if the API call fails
    }
};
