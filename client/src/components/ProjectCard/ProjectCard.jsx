import React from "react";

export default function ProjectCard(props) {
  const { project } = props;
  return <div>{project.name}</div>;
}
