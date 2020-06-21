/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import CardJobs from 'components/CardJobs';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  cont: {
    marginTop: '20px',
  },
  beet: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    margin: '30px',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Andika, sans-serif',
    fontWeight: 'bold',
    fontSize: '17px',
    color: 'rgba(0, 0, 0, 0.38)',
  },
}));
export default function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cont} maxWidth="md">
        <Header />
        <div className={classes.beet}>
          <Typography
            align="center"
            color="textSecondary"
            className={classes.text}
          >
            <span>1000 Jobs </span>
          </Typography>
          <Divider />
        </div>
        <CardJobs />
      </Container>
    </>
  );
}
