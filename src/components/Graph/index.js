import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Graph = (props) => {
  const totalIncome = props.totalIncome;
  const totalExpense = props.totalExpense;

  return (
    <Box
      style={{
        margin: "0 auto",
        width: "80%",
        maxWidth: "600px",
        minWidth: "200px",
      }}
    >
      <Typography variant="h5" align="center">
        Financial Health
      </Typography>
      <div
        style={{
          display: "flex",
          width: "inherit",
          height: "2vh",
          backgroundColor: "#F0887A",
          alignItems: "right",
          margin: "5% auto 5%",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "inherit",
            width: `${
              totalIncome > totalExpense
                ? ((totalIncome - totalExpense) / totalIncome) * 100
                : 0
            }%`,
            backgroundColor: "#7BF0B8",
          }}
        />
      </div>
      <Box style={{ width: "inherit" }}>
        <Typography variant="subtitle2" align="right">
          Total Income: ${totalIncome.toFixed(2)}
          <br />- Total Expense: ${totalExpense.toFixed(2)}
        </Typography>
        <Typography variant="h6" align="right">
          Net: ${(totalIncome - totalExpense).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Graph;
