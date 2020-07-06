/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/**
 *
 * CardJobs
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

const useStyles = makeStyles(theme => ({
  a: {
    textDecoration: 'none',
  },
  title: {
    fontFamily: 'Andika, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'black',
  },
  desc: {
    fontFamily: 'Andika, sans-serif',
    fontWeight: 'bold',
    fontSize: '12px',
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
    gridTemplateColumns: '30% 40%',
    '@media(max-width: 530px)': {
      gridTemplateColumns: '35% 35%',
    },
  },
}));
function CardJobs({ job }) {
  const classes = useStyles();
  const date = new Date(job.date.$date);
  return (
    <a className={classes.a} href={job.url}>
      <Card style={{ marginBottom: 20 }}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {job.title}
            </Typography>
            <Typography className={classes.desc} color="textSecondary" noWrap>
              {job.description}
            </Typography>
            <div className={classes.ul}>
              <div className={classes.ul2}>
                <Typography className={classes.li}>
                  <LocationOnIcon style={{ fontSize: 18 }} />
                  <span>{job.location}</span>
                </Typography>
                <Typography className={classes.li}>
                  <QueryBuilderIcon style={{ fontSize: 18 }} />
                  <span>
                    {new Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    }).format(date)}
                  </span>
                </Typography>
              </div>
              <div />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

CardJobs.propTypes = {
  job: PropTypes.object.isRequired,
};

export default memo(CardJobs);
