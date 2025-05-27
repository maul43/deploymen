import React, { useEffect, useState } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../services/crud.service';

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    project_url: '',
    image_url: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);

  // Ambil data projek saat komponen dimuat
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Fungsi untuk menambah projek baru
  const handleCreateProject = async () => {
    try {
      const createdProject = await createProject(newProject);
      setProjects((prev) => [...prev, createdProject]);
      setNewProject({ title: '', description: '', project_url: '', image_url: '' });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  // Fungsi untuk menghapus projek
  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  // Fungsi untuk mengedit projek
  const handleEditProject = (project) => {
    setIsEditing(true);
    setEditProjectId(project.id);
    setNewProject({
      title: project.title,
      description: project.description,
      project_url: project.project_url,
      image_url: project.image_url,
    });
  };

  // Fungsi untuk memperbarui projek
  const handleUpdateProject = async () => {
    try {
      const updatedProject = await updateProject(editProjectId, newProject);
      setProjects((prev) =>
        prev.map((project) => (project.id === editProjectId ? updatedProject : project))
      );
      setIsEditing(false);
      setEditProjectId(null);
      setNewProject({ title: '', description: '', project_url: '', image_url: '' });
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <div>
      <h1>Daftar Projek</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.project_url} target="_blank" rel="noopener noreferrer">
              Link Projek
            </a>
            <br />
            <img src={project.image_url} alt={project.title} style={{ width: '200px' }} />
            <br />
            <button onClick={() => handleEditProject(project)}>Edit</button>
            <button onClick={() => handleDeleteProject(project.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      <h2>{isEditing ? 'Edit Projek' : 'Tambah Projek Baru'}</h2>
      <input
        type="text"
        placeholder="Judul"
        value={newProject.title}
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
      />
      <textarea
        placeholder="Deskripsi"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL Projek"
        value={newProject.project_url}
        onChange={(e) => setNewProject({ ...newProject, project_url: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL Gambar"
        value={newProject.image_url}
        onChange={(e) => setNewProject({ ...newProject, image_url: e.target.value })}
      />
      {isEditing ? (
        <button onClick={handleUpdateProject}>Update Projek</button>
      ) : (
        <button onClick={handleCreateProject}>Tambah Projek</button>
      )}
    </div>
  );
};

export default ProjectComponent;
