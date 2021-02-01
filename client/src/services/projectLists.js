export const filterProjects = (projects) => {
  const filteredProjects = [];
  projects.forEach((item) => {
    const hasItem = filteredProjects.findIndex((x) => x.id === item.id);
    if (hasItem <= -1) {
      filteredProjects.push(item);
    }
  });
  return filteredProjects;
};
