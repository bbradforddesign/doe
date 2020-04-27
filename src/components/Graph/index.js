import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import Bar from "./Bar";
import Label from "./Label";

const Graph = (props) => {
  return (
    <Card
      style={{
        margin: "5% auto",
        width: "95%",
        padding: "1% 0 1%",
      }}
    >
      <div style={{ marginRight: "2%", marginLeft: "2%" }}>
        {/* Title */}
        <Typography variant="h5">{props.title} Expense Report</Typography>
        {/* Graph */}
        <Box
          style={{
            display: "flex",
            width: "inherit",
            height: "2vh",
            flexDirection: "row",
            margin: "2% auto 2%",
          }}
        >
          <Bar category={props.totalHousing} color="orange" />
          <Bar category={props.totalUtilities} color="green" />
          <Bar category={props.totalFood} color="pink" />
          <Bar category={props.totalAuto} color="blue" />
          <Bar category={props.totalDebt} color="red" />
          <Bar category={props.totalEtc} color="violet" />
          <Bar category={props.totalSavings} color="gold" />
          <Bar category={props.totalIncome - props.totalExpense} color="#EEE" />
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
            <Typography variant="caption" noWrap={true}>
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
              Debt: ${props.totalDebt}
              <br />
              <Label color="violet" />
              Miscellaneous: ${props.totalEtc}
              <br />
              <Label color="gold" />
              Savings: ${props.totalSavings}
            </Typography>
          </Box>
          {/* Net Summary */}
          <Box>
            <Typography
              variant="body2"
              align="right"
              style={{ marginBottom: "2%" }}
            >
              Total Income: <br />${props.totalIncome.toFixed(2)}
              <br />
              Total Expense: <br />${props.totalExpense.toFixed(2)}
            </Typography>
            <Typography
              variant="h6"
              align="right"
              style={
                props.totalIncome > props.totalExpense
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              Remaining Funds: <br />$
              {(props.totalIncome - props.totalExpense).toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </div>
    </Card>
  );
};

export default Graph;
