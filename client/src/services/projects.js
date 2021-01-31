import api from "./apiConfig";

export const getAllProjects = async () => {
  const resp = await api.get("/projects");
  return resp.data;
};

export const getUserProjects = async () => {
  const resp = await api.get("/my_projects");
  return resp.data;
};

export const postProject = async (projectData) => {
  const resp = await api.post("/projects", { project: projectData });
  return resp.data;
};

export const deleteProject = async (id) => {
  const resp = await api.delete(`/projects/${id}`);
  return resp;
};

export const putProject = async (id, projectData) => {
  const resp = await api.put(`/projects/${id}`, { project: projectData });
  return resp.data;
};

export const getOneProject = async (id) => {
  const resp = await api.get(`/projects/${id}`);
  return resp.data;
};
