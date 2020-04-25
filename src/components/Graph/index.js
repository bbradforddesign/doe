import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Bar from "./Bar";
import Label from "./Label";

const Graph = (props) => {
  const totalExpense =
    props.totalHousing +
    props.totalUtilities +
    props.totalFood +
    props.totalAuto +
    props.totalDebt +
    props.totalEtc;

  return (
    <Box
      style={{
        margin: "5% auto",
        width: "90%",
        paddingBottom: "5%",
      }}
    >
      {props.totalIncome && totalExpense ? (
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
            <Bar category={props.totalHousing} color="orange" />
            <Bar category={props.totalUtilities} color="green" />
            <Bar category={props.totalFood} color="pink" />
            <Bar category={props.totalAuto} color="blue" />
            <Bar category={props.totalDebt} color="red" />
            <Bar category={props.totalEtc} color="violet" />
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
                Housing: ${props.totalHousing}
                <br />
                <Label color="green" />
                Utilities: ${props.totalUtilities}
                <br />
                <Label color="pink" />
                Food: ${props.totalFood}
                <br />
                <Label color="blue" />
                Auto: ${props.totalAuto}
                <br />
                <Label color="red" />
                Debt Repayment: ${props.totalDebt}
                <br />
                <Label color="violet" />
                Miscellaneous: ${props.totalEtc}
              </Typography>
            </Box>
            {/* Net Summary */}
            <Box>
              <Typography variant="caption" style={{ marginBottom: "2%" }}>
                Total Income: <br />${props.totalIncome.toFixed(2)}
                <br />
                Total Expense: <br />${totalExpense.toFixed(2)}
              </Typography>
              <Typography variant="subtitle1">
                Remaining Funds: <br />$
                {(props.totalIncome - totalExpense).toFixed(2)}
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
