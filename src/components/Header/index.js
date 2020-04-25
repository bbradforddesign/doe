import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "2%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "3vh",
    backgroundColor: "#A3FFE6",
  },
  logButton: {
    display: "flex",
    alignItems: "center",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header}>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h2">Doe</Typography>
          <Typography variant="h5">Save bucks, use Doe</Typography>
        </Grid>
        <Grid item xs={2} className={classes.logButton}>
          {props.user ? (
            <Button variant="outlined" color="primary" onClick={props.logout}>
              Log out
            </Button>
          ) : (
            <Button variant="outlined" color="primary" onClick={props.login}>
              Log in
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
