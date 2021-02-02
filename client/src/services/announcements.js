import api from "./apiConfig";

export const getProjectAnnouncements = async (id) => {
  const resp = await api.get(`projects/${id}/announcements/`);
  return resp.data;
};

export const postAnnouncement = async (announcementData) => {
  const resp = await api.post("/announcements", {
    announcement: announcementData,
  });
  return resp.data;
};
