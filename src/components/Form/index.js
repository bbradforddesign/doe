import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "40%",
    margin: "0 auto",
    padding: "2%",
  },
  formControl: {
    margin: theme.spacing(2),
    width: "80%",
  },
}));

const Form = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <form onSubmit={props.handleSubmit}>
        <InputLabel>Title</InputLabel>
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
            <MenuItem value={"expense"}>Expense</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" type="submit">
            Add Expense
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Form;
