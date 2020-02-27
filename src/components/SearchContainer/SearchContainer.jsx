import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import axios from 'axios';
import find from 'lodash/find';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { newsPDF } from '../../helpers/items';

export default function SearchContainer({ setCurrentPage, setCoordinates }) {
  const [suggestions, setSuggestion] = useState(null);
  const renderSuggestions = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    let response = await axios.get('https://searchpaper.herokuapp.com/search', { params: { query: value } });
    response = response.data.data.map((obj) => ({ text: obj.attributes.text, page: obj.attributes.entity.page_number, coord: obj.attributes.position }));
    if(event && value === '') {
      setSuggestion(null)
    } else {
      if (response.length > 0) {
        setSuggestion(response);
      } else {
        setSuggestion([])
      }
    }
  };

  function isOdd(n) {
    return Math.abs(n % 2) === 1;
  }

  const goToPage = (page, coord) => {
    if (page > 1) {
      page = isOdd(page) ? (page - 1) : (page + 1);
    }
    let currentItem = find(newsPDF, (item) => item.number === page);
    console.log(newsPDF)
    debugger
    setCoordinates(coord);
    setCurrentPage(currentItem.index);
  };

  return (
    <div>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(event) => renderSuggestions(event)}
        fullWidth
      />
      {suggestions === null ? null: (
        <>
          { suggestions.length === 0 ? (<h1>Not found</h1>) : (
          <List>
            {suggestions.map((suggestion) => (
              <ListItem
                onClick={() => goToPage(suggestion.page, suggestion.coord)}
                key={suggestion.text}
                button
              >
                <ListItemText primary={`${suggestion.page} ${suggestion.text} ${suggestion.coord}`} />
              </ListItem>
            ))}
          </List>
        )}
        </>
      )}
    </div>
  );
}

SearchContainer.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired
};
