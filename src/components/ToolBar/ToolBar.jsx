import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '20%',
    marginRight: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    paddingTop: '8px',
  },
}));

export default function ToolBar({
  setcurrentPageIndex,
  items,
  currentPageIndex,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="inherit" variant="contained" fullWidth>
        <Button
          disabled={currentPageIndex === 1}
          onClick={() => {
            setcurrentPageIndex(currentPageIndex - 1);
          }}
        >
          <NavigateBeforeIcon fontSize='large' />
        </Button>
        <Button
          disabled={currentPageIndex === items.length}
          onClick={() => {
            setcurrentPageIndex(currentPageIndex + 1);
          }}
        >
          <NavigateNextIcon fontSize='large' />
        </Button>
      </ButtonGroup>
    </div>
  );
}

ToolBar.propTypes = {
  items: PropTypes.objectOf(Object).isRequired,
  setcurrentPageIndex: PropTypes.func.isRequired,
  currentPageIndex: PropTypes.string.isRequired
};
