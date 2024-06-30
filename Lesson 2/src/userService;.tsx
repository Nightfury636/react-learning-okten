import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.users;
};

export const fetchUserPosts = async (userId: number) => {
    const response = await axios.get(`${API_URL}/posts/user/${userId}`);
    return response.data.posts;
};
