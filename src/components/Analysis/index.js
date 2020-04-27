import React, { useState, useEffect } from "react";

import Graph from "../Graph";

const Analysis = (props) => {
  // store totals in each category
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalHousing, setTotalHousing] = useState(0);
  const [totalUtilities, setTotalUtilities] = useState(0);
  const [totalFood, setTotalFood] = useState(0);
  const [totalAuto, setTotalAuto] = useState(0);
  const [totalDebt, setTotalDebt] = useState(0);
  const [totalEtc, setTotalEtc] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  // filter out other months' items
  const receivedItems = props.items;
  const items = receivedItems.filter((item) => item.created === props.month);

  // calculate total in a given category
  const calcTotal = (props, category, setTotal) => {
    let total = 0;
    items.map((item) => {
      if (item.user === props.user.email && item.category === category) {
        total += parseFloat(item.amount);
      }
      setTotal(total);
      return null;
    });
  };

  // run calculating func on each category, storing totals in state
  useEffect(() => {
    calcTotal(props, "income", setTotalIncome);
    calcTotal(props, "housing", setTotalHousing);
    calcTotal(props, "utilities", setTotalUtilities);
    calcTotal(props, "food", setTotalFood);
    calcTotal(props, "auto", setTotalAuto);
    calcTotal(props, "debt", setTotalDebt);
    calcTotal(props, "etc", setTotalEtc);
    calcTotal(props, "savings", setTotalSavings);
  }, [props]);

  // totalExpense for graph. change state to array, and use reduce?
  const totalExpense =
    totalHousing +
    totalUtilities +
    totalFood +
    totalAuto +
    totalDebt +
    totalSavings +
    totalEtc;

  return (
    <div>
      {totalIncome || totalExpense ? (
        <Graph
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          totalHousing={totalHousing}
          totalUtilities={totalUtilities}
          totalFood={totalFood}
          totalAuto={totalAuto}
          totalDebt={totalDebt}
          totalEtc={totalEtc}
          totalSavings={totalSavings}
          title={props.title}
        />
      ) : null}
    </div>
  );
};

export default Analysis;
