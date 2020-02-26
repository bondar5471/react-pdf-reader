import React from "react";
import axios from "axios";
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
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

  const onSearch = (event) => {
    event.preventDefault();
    const data = event.target.value;
    axios.get(`https://searchpaper.herokuapp.com/search`, { query: data })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    console.log(event.target.value)
  }

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
          <Grid item xs={12}>
            <TextField fullWidth label="Search" variant="outlined" onChange={event => onSearch(event)} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <div className={classes.text}>
              <Typography
                align="center"
                variant="h6"
              >{`${currentPageIndex}/${items.length}`}</Typography>
            </div>
          </Grid>
          <Grid item lg={6} xs={12}>
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
