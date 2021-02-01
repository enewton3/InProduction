import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const { project } = props;
  return (
    <Card className="project-card" style={{ backgroundColor: "#a4a2a2" }}>
      <CardActionArea>
        <CardMedia
          className="card-image"
          src={project.image}
          title={project.name}
        />
        <Link id="project-card-name" to={`/project/${project.id}`}>
          <CardContent>
            <Typography>{project.name}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions id="project-card-buttons">
        <Link id="project-card-button" to={`/project/${project.id}`}>
          <Button variant="outlined">Project Page</Button>
        </Link>
        <a id="project-card-button" href={`${project.url}`}>
          <Button variant="outlined">Show Website</Button>
        </a>
        <Link id="project-card-button" to={`/project/${project.id}`}>
          <Button variant="outlined">Contact SM</Button>
        </Link>
        <Link id="project-card-button" to={`/project/${project.id}/messages`}>
          <Button variant="outlined">Go To Messages</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
