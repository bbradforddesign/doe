import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logo.png";
const useStyles = makeStyles((theme) => ({
  header: {
    padding: "1% 2% 1% 2%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#353CAD",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header}>
      <Box style={{ color: "#fff" }}>
        <Box
          style={{
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            style={{ height: "70px", width: "70px" }}
            alt="Doe logo"
          />
          <Typography variant="caption">Save Bucks, Use Doe</Typography>
        </Box>
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
