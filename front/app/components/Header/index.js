/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  const ListProfession = ['Informatique', 'marketing'];
  const useStyles = makeStyles(theme => ({
    Filter: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    formControl: {
      minWidth: 130,
    },
  }));
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [contrat, setContrat] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const handleChange = event => {
    setSearch(event.target.value);
  };
  const handleChange2 = event => {
    setLocation(event.target.value);
  };
  const handleChange3 = event => {
    setContrat(event.target.value);
  };
  const handleChange4 = event => {
    setProfession(event.target.value);
  };
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className={classes.Filter}>
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        label="Search"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        onChange={handleChange2}
        label="Location"
        variant="outlined"
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Contrat</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={contrat}
          onChange={handleChange3}
          label="Contrat"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="CDI">CDI</MenuItem>
          <MenuItem value="Stage">Stage</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={ListProfession}
        renderInput={params => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
      {/*<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Professions
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={profession}
          onChange={handleChange4}
          label="Professions"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>*/}
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
