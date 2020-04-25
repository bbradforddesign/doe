import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Card";

import { useMediaQuery } from "@material-ui/core";

import Items from "../Items";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "40%",
    margin: "0 auto",
    paddingLeft: "10%",
  },
  formControl: {
    margin: theme.spacing(2),
    width: "80%",
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <Box style={isMobile ? null : { display: "flex" }}>
      <Box
        className={classes.container}
        style={isMobile ? { width: "80%" } : { marginLeft: "0" }}
      >
        <form onSubmit={props.handleSubmit}>
          <InputLabel>Description</InputLabel>
          <FormControl className={classes.formControl}>
            <TextField
              name="currentItem"
              placeholder="Pay, Rent, Gas..."
              onChange={props.handleChange}
              value={props.currentItem}
            />
          </FormControl>
          <InputLabel>Amount</InputLabel>
          <FormControl className={classes.formControl}>
            <TextField
              name="amount"
              placeholder="0"
              onChange={props.handleChange}
              value={props.amount}
              type="number"
            />
          </FormControl>
          <InputLabel>Category</InputLabel>
          <FormControl className={classes.formControl}>
            <Select
              name="category"
              value={props.category}
              onChange={props.handleChange}
            >
              <MenuItem value={"income"}>Income</MenuItem>
              <MenuItem value={"housing"}>Housing</MenuItem>
              <MenuItem value={"utilities"}>Utilities</MenuItem>
              <MenuItem value={"food"}>Food</MenuItem>
              <MenuItem value={"auto"}>Auto</MenuItem>
              <MenuItem value={"debt"}>Debt Payment</MenuItem>
              <MenuItem value={"etc"}>Miscellaneous</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button variant="contained" color="primary" type="submit">
              Add Amount
            </Button>
          </FormControl>
        </form>
      </Box>
      <Items items={props.items} user={props.user} />
    </Box>
  );
};

export default Form;
