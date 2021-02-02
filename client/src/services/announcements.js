import api from "./apiConfig";

export const getProjectAnnouncements = async (id) => {
  const resp = await api.get(`projects/${id}/announcements/`);
  return resp.data;
};
