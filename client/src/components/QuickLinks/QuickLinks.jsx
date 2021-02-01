import { Divider, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <List className="quick-links-menu">
      <Link to="" className="quick-links-item">
        <ListItem button>RESOURCES</ListItem>
      </Link>
      <Divider />
      <Link to="" className="quick-links-item">
        <ListItem button>SCHEDULE</ListItem>
      </Link>
      <Divider />
      <Link to="" className="quick-links-item">
        <ListItem button>CONTACT SHEET</ListItem>
      </Link>
      <Divider />
      <Link to="" className="quick-links-item">
        <ListItem button>MESSAGES</ListItem>
      </Link>
    </List>
  );
}
