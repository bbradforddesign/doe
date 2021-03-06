import React from "react";
import firebase from "../../firebase";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1vh auto",
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemList: {
    maxHeight: 300,
    overflow: "auto",
    marginTop: "5%",
    flex: "1",
    display: "flex",
    flexDirection: "column-reverse",
  },
}));

const Items = (props) => {
  const removeItem = (itemId) => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  const classes = useStyles();

  return (
    <Box>
      <List
        className={classes.itemList}
        style={
          isMobile ? { width: "100%" } : { width: "50vw", maxWidth: "500px" }
        }
      >
        <ul style={{ listStyle: "none", marginRight: "8%" }}>
          {props.items.map((item) => {
            return (
              <Box key={item.id}>
                {item.user === props.user.email ? (
                  <Card className={classes.card}>
                    <Box
                      style={{
                        flex: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      <Typography variant="overline" align="left">
                        {item.category}
                      </Typography>
                      <Typography variant="body2">{item.title}</Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      style={{ noWrap: "true", flex: 1 }}
                    >
                      {item.category === "income" ? "+ " : "- "}${item.amount}
                    </Typography>

                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => removeItem(item.id)}
                    >
                      Delete
                    </Button>
                  </Card>
                ) : null}
              </Box>
            );
          })}
        </ul>
      </List>
    </Box>
  );
};

export default Items;
