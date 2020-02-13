import React from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  text: {
    paddingTop: "8px"
  }
}));

export default function ToolBar({
  setcurrentPageIndex,
  items,
  currentPageIndex
}) {
  const classes = useStyles();

  const handleChange = event => {
    setcurrentPageIndex(event.target.value);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="inherit" variant="contained" fullWidth>
        <Button
          disabled={currentPageIndex === 1}
          onClick={() => {
            setcurrentPageIndex(currentPageIndex - 1);
          }}
        >
          <NavigateBeforeIcon />
        </Button>
        <Grid container>
          <Grid item xs={6}>
            <div className={classes.text}>
              <Typography
                align="center"
                variant="h6"
              >{`Page: ${currentPageIndex} / ${items.length}`}</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Page</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentPageIndex}
                onChange={handleChange}
              >
                {items.map(item => (
                  <MenuItem key={item.index} value={item.index}>
                    {" "}
                    {item.index}{" "}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          disabled={currentPageIndex === items.length}
          onClick={() => {
            setcurrentPageIndex(currentPageIndex + 1);
          }}
        >
          <NavigateNextIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
