import api from "./apiConfig";

export const getProjectRoles = async (id) => {
  const resp = await api.get(`/projects/${id}/roles`);
  return resp.data;
};
