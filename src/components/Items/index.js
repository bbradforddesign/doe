import React, { useEffect, useState } from "react";
import firebase from "../../firebase";

import Graph from "../Graph";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    listStyle: "none",
    marginLeft: "4%",
  },
  card: {
    margin: "1vh auto",
    width: "90%",
    maxWidth: "600px",
    padding: "2%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Items = (props) => {
  const removeItem = (itemId) => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  const classes = useStyles();

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalHousing, setTotalHousing] = useState(0);
  const [totalUtilities, setTotalUtilities] = useState(0);
  const [totalFood, setTotalFood] = useState(0);
  const [totalAuto, setTotalAuto] = useState(0);
  const [totalDebt, setTotalDebt] = useState(0);
  const [totalEtc, setTotalEtc] = useState(0);

  // calculate total in a given category
  const calcTotal = (props, category, setTotal) => {
    let total = 0;
    props.items.map((item) => {
      if (item.user === props.user.email && item.category === category) {
        total += parseFloat(item.amount);
      }
      setTotal(total);
      return null;
    });
  };

  useEffect(() => {
    calcTotal(props, "income", setTotalIncome);
    calcTotal(props, "housing", setTotalHousing);
    calcTotal(props, "utilities", setTotalUtilities);
    calcTotal(props, "food", setTotalFood);
    calcTotal(props, "auto", setTotalAuto);
    calcTotal(props, "debt", setTotalDebt);
    calcTotal(props, "etc", setTotalEtc);
  }, [props]);

  return (
    <Box style={{ width: "100%" }}>
      <List style={{ maxHeight: 300, overflow: "auto" }}>
        <ul className={classes.container}>
          {props.items.map((item) => {
            return (
              <Box key={item.id} component="li">
                {item.user === props.user.email ? (
                  <ListItem>
                    <Card className={classes.card}>
                      <Box
                        style={{
                          width: "70%",
                          wordWrap: "break-word",
                        }}
                      >
                        <Typography variant="body1" style={{ noWrap: "true" }}>
                          {item.category === "income" ? "+ " : "- "}$
                          {item.amount}
                        </Typography>
                        <Typography variant="body2">{item.title}</Typography>
                      </Box>

                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </Button>
                    </Card>
                  </ListItem>
                ) : null}
              </Box>
            );
          })}
        </ul>
      </List>
      <Graph
        totalIncome={totalIncome}
        totalHousing={totalHousing}
        totalUtilities={totalUtilities}
        totalFood={totalFood}
        totalAuto={totalAuto}
        totalDebt={totalDebt}
        totalEtc={totalEtc}
        title={"Expense Analysis"}
      />
    </Box>
  );
};

export default Items;
