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
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  const ListProfession = ['Informatique', 'marketing'];
  const useStyles = makeStyles(theme => ({
    Filter: {
      display: 'grid',
      //gridTemplateColumns: '2fr 1.6fr 1fr 1fr',
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      margin: 8,
    },
    divider: {
      height: 28,
      margin: 8,
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
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
  const [inputValue, setInputValue] = React.useState('');
  const openDrewer = bool => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(bool);
  };
  return (
    <div className={classes.Filter}>
      {/*<TextField
        id="outlined-basic"
        onChange={handleChange}
        label="Search"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        onChange={handleChange2}
        label="Location"
        variant="outlined"
        size="small"
      />
      <FormControl variant="outlined" size="small">
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
        size="small"
        value={profession}
        onChange={(event, newValue) => {
          setProfession(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={ListProfession}
        renderInput={params => (
          <TextField {...params} label="Professions" variant="outlined" />
        )}
        />*/}
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon onClick={openDrewer(true)} />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={openDrewer(false)}>
          sss
        </Drawer>
      </Paper>
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
