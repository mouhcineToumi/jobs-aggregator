/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
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
import Fade from '@material-ui/core/Fade';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import DirectionsIcon from '@material-ui/icons/Directions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header({ search, setSearch, location, setLocation, loc }) {
  const ListProfession = ['Informatique', 'marketing'];
  const useStyles = makeStyles(theme => ({
    Filter: {
      margin: 10,
      width: '30%',
      height: '80',
      '@media(max-width: 700px)': {
        width: '45%',
      },
      '@media(max-width: 450px)': {
        width: '100%',
      },
    },
    Titlefilter: {
      margin: 10,
      marginBottom: 0,
    },
    Divfilter: {
      margin: 10,
      marginTop: 0,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    FilterTitle: {
      color: '#1C3153',
      fontSize: 14,
      textTransform: 'uppercase',
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
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [ShowFilter, setShowFilter] = React.useState(false);

  const handleChange = event => {
    setSearch(event.target.value);
  };
  const handleChange2 = event => {
    setLocation(event.target.value);
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

  const openFilter = () => {
    if (ShowFilter) {
      setShowFilter(false);
    }
    if (!ShowFilter) {
      setShowFilter(true);
    }
  };
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon onClick={() => openFilter()} />
        </IconButton>
        <InputBase
          value={search}
          className={classes.input}
          placeholder="Search for your job"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search' }}
        />
        {/*<Modal
          open={open}
          onClose={openDrewer(false)}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper}>
            <h3 id="transition-modal-title">Filters</h3>
            <TextField
              className={classes.Filter}
              id="outlined-basic"
              onChange={handleChange2}
              label="Location"
              variant="outlined"
              size="small"
            />
          </div>
        </Modal>*/}
        {/*<Drawer anchor="left" open={false}>
          <TextField
            className={classes.Filter}
            id="outlined-basic"
            onChange={handleChange2}
            label="Location"
            variant="outlined"
            size="small"
          />
        </Drawer>*/}
      </Paper>
      {ShowFilter && (
        <div className={classes.Allfilter}>
          <div className={classes.Titlefilter}>
            <p className={classes.FilterTitle}>Mes Filters :</p>
          </div>
          <div className={classes.Divfilter}>
            <FormControl className={classes.Filter}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                value={location}
                id="outlined-basic"
                onChange={handleChange2}
                label="Location"
                size="small"
              >
                {loc.map(l => (
                  <MenuItem value={l}>{l}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  location: PropTypes.string,
  setLocation: PropTypes.func,
  loc: PropTypes.array,
};

export default memo(Header);
