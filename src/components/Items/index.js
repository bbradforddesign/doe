import React, { useEffect, useState } from "react";
import firebase from "../../firebase";

import Graph from "../Graph";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    listStyle: "none",
    marginLeft: "4%",
  },
  card: {
    margin: "1vh auto",
    width: "80%",
  },
  amount: {
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Items = (props) => {
  const removeItem = (itemId) => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  const classes = useStyles();

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    // reset placeholder value to recalculate when items change
    let total = 0;
    // for each item, if category equals income, increase placeholder by amount
    props.items.map((item) => {
      if (item.user === props.user.email && item.category === "income") {
        total += parseFloat(item.amount);
      }
      // set state to equal placeholder
      setTotalIncome(total);
      return null;
    });
  }, [props]);

  useEffect(() => {
    let total = 0;
    props.items.map((item) => {
      if (item.user === props.user.email && item.category === "expense") {
        total += parseFloat(item.amount);
      }
      setTotalExpense(total);
      return null;
    });
  }, [props]);

  return (
    <Box>
      <ul className={classes.container}>
        {props.items.map((item) => {
          return (
            <Box key={item.id} component="li">
              {item.user === props.user.email ? (
                <div>
                  <Card
                    style={{
                      backgroundColor:
                        item.category === "income" ? "#B3FFE6" : "#FF988F",
                    }}
                    className={classes.card}
                  >
                    <Grid container spacing={2} className={classes.amount}>
                      <Grid item xs={4}>
                        <Typography variant="h5">${item.amount}</Typography>
                        <Typography variant="subtitle1">
                          {item.category}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="h6">{item.title}</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          variant="contained"
                          color="secondary"
                          display="flex"
                          onClick={() => removeItem(item.id)}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                </div>
              ) : null}
            </Box>
          );
        })}
      </ul>
      <Graph totalIncome={totalIncome} totalExpense={totalExpense} />
    </Box>
  );
};

export default Items;
