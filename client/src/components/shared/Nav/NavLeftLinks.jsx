import { Divider, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NavLeftLinks(props) {
  const { projects } = props;
  return (
    <List className="nav-left-links">
      {projects.map((item) => (
        <Link className="nav-left-link" to={`/project/${item.id}`}>
          <ListItem>{item.name}</ListItem>
          <Divider />
        </Link>
      ))}
    </List>
  );
}