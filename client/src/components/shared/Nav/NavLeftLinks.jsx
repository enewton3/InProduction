import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NavLeftLinks(props) {
  const { projects } = props;
  return (
    <List className="nav-left-links">
      {projects.map((item) => (
        <Link
          key={`${item.name}link`}
          className="nav-left-link"
          to={`/project/${item.id}`}
        >
          <ListItem divider button>
            {item.name}
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
