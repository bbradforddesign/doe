import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import InfoIcon from "@material-ui/icons/Info";

const NavMenu = () => {
  const [value, setValue] = useState(0);

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <BottomNavigation
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        showLabels
        style={{
          width: "inherit",
          marginBottom: "10px",
        }}
      >
        <BottomNavigationAction
          label="Transactions"
          component={Link}
          to="/form"
          value="form"
          icon={<EditIcon />}
        />
        <BottomNavigationAction
          label="Analysis"
          component={Link}
          to="/graph"
          value="analysis"
          icon={<EqualizerIcon />}
        />
        <BottomNavigationAction
          label="About"
          component={Link}
          to="/about"
          value="about"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavMenu;
