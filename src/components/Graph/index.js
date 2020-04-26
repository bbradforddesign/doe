import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

import Bar from "./Bar";
import Label from "./Label";

const Graph = (props) => {
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

  const totalExpense =
    totalHousing +
    totalUtilities +
    totalFood +
    totalAuto +
    totalDebt +
    totalEtc;

  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <Box
      style={{
        margin: "5% auto",
        width: "95%",
        paddingBottom: "5%",
      }}
    >
      {totalIncome && totalExpense ? (
        <div>
          {/* Title */}
          <Typography align="center" variant="h6">
            {props.title}
          </Typography>
          {/* Graph */}
          <Box
            style={{
              display: "flex",
              width: "inherit",
              height: "2vh",
              flexDirection: "row",
              margin: "2% auto 5%",
            }}
          >
            <Bar category={totalHousing} color="orange" />
            <Bar category={totalUtilities} color="green" />
            <Bar category={totalFood} color="pink" />
            <Bar category={totalAuto} color="blue" />
            <Bar category={totalDebt} color="red" />
            <Bar category={totalEtc} color="violet" />
          </Box>
          {/* Graph Details */}
          <Box
            style={{
              width: "inherit",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Graph Legend */}
            <Box>
              <Typography variant="caption" noWrap="true">
                <Label color="orange" />
                Housing: ${totalHousing}
                <br />
                <Label color="green" />
                Utilities: ${totalUtilities}
                <br />
                <Label color="pink" />
                Food: ${totalFood}
                <br />
                <Label color="blue" />
                Auto: ${totalAuto}
                <br />
                <Label color="red" />
                Debt: ${totalDebt}
                <br />
                <Label color="violet" />
                Miscellaneous: ${totalEtc}
              </Typography>
            </Box>
            {/* Net Summary */}
            <Box>
              <Typography
                variant="body2"
                align="right"
                style={{ marginBottom: "2%" }}
              >
                Total Income: <br />${totalIncome.toFixed(2)}
                <br />
                Total Expense: <br />${totalExpense.toFixed(2)}
              </Typography>
              <Typography
                variant="h6"
                align="right"
                style={
                  totalIncome > totalExpense
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                Remaining Funds: <br />$
                {(totalIncome - totalExpense).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </div>
      ) : (
        <div>
          {/* Placeholder */}
          <Typography align="center" variant="h5" style={{ padding: "20%" }}>
            Enter income and expense data to view insights
          </Typography>
        </div>
      )}
    </Box>
  );
};

export default Graph;
