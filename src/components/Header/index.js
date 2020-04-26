import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "1% 2% 1% 2%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#353CAD",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header}>
      <Box style={{ flex: 1, color: "#fff" }}>
        <Typography variant="h3">Doe</Typography>
        <Typography variant="subtitle1">Save bucks, use Doe</Typography>
      </Box>
      <Box style={{ alignSelf: "center" }}>
        {props.user ? (
          <Button
            variant="text"
            style={{ color: "#fff" }}
            onClick={props.logout}
          >
            Log out
          </Button>
        ) : (
          <Button
            variant="text"
            style={{ color: "#fff" }}
            onClick={props.login}
          >
            Log in
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
