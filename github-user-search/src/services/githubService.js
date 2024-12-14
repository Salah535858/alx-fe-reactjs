import axios from 'axios';

// Create an Axios instance for GitHub API
const githubService = axios.create({
    baseURL: 'https://api.github.com', // Base URL for GitHub API
    headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, // Use the API key stored in the .env file
    },
});

// Function to search GitHub users
export const searchUsers = async (query) => {
    try {
        const response = await githubService.get(`/search/users?q=${query}`);
        return response.data; // Return the API response data
    } catch (error) {
        console.error('Error fetching GitHub users:', error);
        throw error; // Propagate the error
    }
};
