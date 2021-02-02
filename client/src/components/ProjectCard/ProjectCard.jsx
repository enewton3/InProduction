import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import PageviewIcon from "@material-ui/icons/Pageview";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/images/defaultCardImage.jpg";
import { CardHeader, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkIcon from "@material-ui/icons/Link";
import ChatIcon from "@material-ui/icons/Chat";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";

export default function ProjectCard(props) {
  const { project } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "#a4a2a2",
    },
    media: {
      height: 140,
      // paddingTop: "56.25%", // 16:9
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={project.name} subheader={project.start_date} />
      <CardMedia
        component="img"
        className={classes.media}
        src={project.image_url ? project.image_url : defaultImage}
        title={project.name}
      />
      <Divider variant="middle" />
      <CardActions
        className={classes.actions}
        disableSpacing
        alignitems="center"
        id="project-card-buttons"
      >
        <Link id="project-card-button" to={`/project/${project.id}`}>
          <Button size="small" startIcon={<PageviewIcon />}>
            Show Page
          </Button>
        </Link>
        <Link id="project-card-button-right" to={`/project/${project.id}`}>
          <Button size="small" endIcon={<LinkIcon />}>
            Website
          </Button>
        </Link>
        <Link id="project-card-button" to={`/project/${project.id}`}>
          <Button size="small" startIcon={<PermPhoneMsgIcon />}>
            Contact SM
          </Button>
        </Link>
        <Link
          id="project-card-button-right"
          to={`/project/${project.id}/messages`}
        >
          <Button size="small" endIcon={<ChatIcon />}>
            Messages
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
