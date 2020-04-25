import React from "react";
import Box from "@material-ui/core/Box";

const Label = (props) => {
  return (
    <Box
      style={{
        height: "8%",
        width: "10%",
        backgroundColor: props.color,
        display: "inline-block",
        marginRight: "5%",
      }}
    />
  );
};

export default Label;
