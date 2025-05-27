import axios from 'axios';

const getProjects = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/projek');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

export default getProjects;