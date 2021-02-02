import { Card } from "@material-ui/core";
import React from "react";

export default function Announcements(props) {
  const { announcements } = props;
  return (
    <>
      {announcements &&
        announcements.map((item) => {
          return (
            <Card>
              <div>{item.content}</div>
            </Card>
          );
        })}
    </>
  );
}
