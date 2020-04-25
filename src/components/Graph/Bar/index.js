import React from "react";
import Box from "@material-ui/core/Box";

const Bar = (props) => {
  return (
    <Box
      style={{
        display: "flex",
        height: "inherit",
        flexGrow: props.category,
        backgroundColor: props.color,
      }}
    />
  );
};

export default Bar;
