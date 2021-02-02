import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function Announcements(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "secondary",
      width: "80%",
      margin: "1vh 1vw 1vh 1vw",
    },
    avatar: {
      height: "30px",
    },
  }));

  const classes = useStyles();

  const { announcements } = props;

  return (
    <>
      {announcements &&
        announcements.map((item) => {
          return (
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar
                    // className={classes.avatar}
                    alt={item.user.username}
                    src={item.user.prof_pic}
                  >
                    {item.user.username.split("")[0].toUpperCase()}
                  </Avatar>
                }
                title={item.user.username}
                subheader={item.created_at}
              ></CardHeader>
              <CardContent>
                <Typography variant="body2">{item.content}</Typography>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
}
