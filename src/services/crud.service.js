import axios from 'axios';

// Base URL API
const API_URL = 'http://localhost:5000/api/projek';

// Fungsi untuk mendapatkan semua data projek
export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Fungsi untuk membuat projek baru
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(API_URL, projectData);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Fungsi untuk memperbarui projek berdasarkan ID
export const updateProject = async (id, projectData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, projectData);
    return response.data;
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    throw error;
  }
};

// Fungsi untuk menghapus projek berdasarkan ID
export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting project with ID ${id}:`, error);
    throw error;
  }
};
