import React, { useEffect, useState } from "react";
import Analysis from "../Analysis";
import List from "@material-ui/core/List";

// determine dates where items were submitted to create new graphs for each month

const Monthly = (props) => {
  const [months, setMonths] = useState([]);

  // store all possible dates in state
  const calcMonths = (props) => {
    let dates = [];
    props.items.map((item) => {
      if (!dates.includes(item.created)) {
        dates.push(item.created);
      }
      setMonths(dates);
      return null;
    });
  };

  useEffect(() => {
    calcMonths(props);
  }, [props]);

  const allGraphs = [];
  return (
    <List style={{ maxHeight: "1000px", overflow: "auto" }}>
      {months.map((month) => {
        allGraphs.push(
          <div key={allGraphs.length}>
            <Analysis
              items={props.items}
              user={props.user}
              month={month}
              title={month}
            />
          </div>
        );
        return null;
      })}
      {allGraphs}
    </List>
  );
};

export default Monthly;
