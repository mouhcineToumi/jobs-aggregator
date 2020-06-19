/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/**
 *
 * CardJobs
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CardJobs() {
  const useStyles = makeStyles(theme => ({
    title: {
      fontFamily: 'Andika, sans-serif',
      fontWeight: 'bold',
      fontSize: '20px',
      color: 'black',
    },
    desc: {
      fontFamily: 'Andika, sans-serif',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    li: {
      display: 'grid',
      gridTemplateColumns: '25px 1fr',
      justifyContent: 'center',
      fontFamily: 'Andika, sans-serif',
      fontWeight: 'bold',
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.38)',
    },
    ul: {
      marginTop: '17px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      '@media(max-width: 800px)': {
        gridTemplateColumns: '2fr 1fr',
      },
      '@media(max-width: 630px)': {
        gridTemplateColumns: '1fr',
      },
    },
    ul2: {
      display: 'grid',
      gridTemplateColumns: '30% 30% 40%',
      '@media(max-width: 530px)': {
        gridTemplateColumns: '30% 35% 35%',
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Assistant Data Specialist - Data Integration - OSIRIS
            </Typography>
            {/*<Typography className={classes.desc} color="textSecondary">
              assistant data 
              </Typography>*/}
            <div className={classes.ul}>
              <div className={classes.ul2}>
                <Typography className={classes.li}>
                  <AssignmentIcon style={{ fontSize: 18 }} />
                  <span>Stage</span>
                </Typography>
                <Typography className={classes.li}>
                  <LocationOnIcon style={{ fontSize: 18 }} />
                  <span>Lyon</span>
                </Typography>
                <Typography className={classes.li}>
                  <QueryBuilderIcon style={{ fontSize: 18 }} />
                  <span>18/10/2020</span>
                </Typography>
              </div>
              <div />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

CardJobs.propTypes = {};

export default memo(CardJobs);
