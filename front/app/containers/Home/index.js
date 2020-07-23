/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/**
 *
 * Home
 *
 */

import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Header from 'components/Header';
import CardJobs from 'components/CardJobs';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import FilterResults from 'react-filter-search';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectAllJobs, counter, selectAllLocations } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  fetchListJobs,
  increCounterAction,
  fetchListLocalisation,
} from './actions';

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
  loading: {
    margin: 10,
    marginBottom: 20,
    color: 'black',
  },
}));

const loc = ['Casablanca', 'Rabat'];

export function Home({ fetchJobs, Jobs, Locations, fetchLocations }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  const classes = useStyles();
  const isFirstRun = useRef(true);
  const isFirstRun2 = useRef(true);
  const [search, setSearch] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [hasMore, setHasMore] = React.useState(true);
  const [hasMore2, setHasMore2] = React.useState(true);
  const [wait, setWait] = React.useState(false);
  const [wait2, setWait2] = React.useState(false);
  const [offers, setOffers] = React.useState([]);
  const [jobsF, setJobsF] = React.useState([]);
  const [offersFiltrer, setOffersFiltrer] = React.useState([]);

  const filterJobs = offer => {
    setJobsF([]);
    setWait2(false);
    setOffersFiltrer([]);
    const joboff = [];
    offer.map(of => {
      if (of.location === location) {
        joboff.push(of);
      }
    });
    setJobsF(joboff);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    filterJobs(Jobs);
  }, [location]);

  useEffect(() => {
    setOffers(Jobs.slice(0, 5));
    setTimeout(() => {
      setWait(true);
    }, 2000);
  }, [Jobs]);

  useEffect(() => {
    if (isFirstRun2.current) {
      isFirstRun2.current = false;
      return;
    }
    setTimeout(() => {
      setOffersFiltrer(jobsF.slice(0, 5));
      setWait2(true);
    }, 2000);
  }, [jobsF]);

  const fetchMoreData = () => {
    setTimeout(() => {
      if (offers.length >= Jobs.length) {
        setHasMore(false);
      }
      setOffers(Jobs.slice(0, offers.length + 5));
    }, 1500);
  };

  const fetchMoreData2 = () => {
    setTimeout(() => {
      if (offersFiltrer.length >= jobsF.length) {
        setHasMore2(false);
      }
      setOffersFiltrer(jobsF.slice(0, offersFiltrer.length + 5));
    }, 1500);
  };

  return (
    <>
      <Container className={classes.cont} maxWidth="md">
        <Header
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          loc={loc}
        />
        {wait && location === '' && (
          <FilterResults
            value={search}
            data={offers}
            renderResults={results => (
              <>
                <div className={classes.beet}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    className={classes.text}
                  >
                    <span>{results.length} job(s) available</span>
                  </Typography>
                  <Divider />
                </div>
                <InfiniteScroll
                  dataLength={results.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <CircularProgress
                        size={20}
                        disableShrink
                        className={classes.loading}
                      />
                    </div>
                  }
                >
                  {results.map(job => (
                    <CardJobs key={job._id} job={job} />
                  ))}
                </InfiniteScroll>
              </>
            )}
          />
        )}
        {wait2 && location !== '' && (
          <>
            <div className={classes.beet}>
              <Typography
                align="center"
                color="textSecondary"
                className={classes.text}
              >
                <span>{offersFiltrer.length} job(s) available</span>
              </Typography>
              <Divider />
            </div>
            <InfiniteScroll
              dataLength={offersFiltrer.length}
              next={fetchMoreData2}
              hasMore={hasMore2}
              loader={
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <CircularProgress
                    size={20}
                    disableShrink
                    className={classes.loading}
                  />
                </div>
              }
            >
              {offersFiltrer.map(job => (
                <CardJobs key={job._id} job={job} />
              ))}
            </InfiniteScroll>
          </>
        )}
      </Container>
    </>
  );
}

Home.propTypes = {
  Jobs: PropTypes.array.isRequired,
  fetchJobs: PropTypes.func.isRequired,
  Locations: PropTypes.array.isRequired,
  fetchLocations: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Jobs: selectAllJobs,
  Locations: selectAllLocations,
  counter,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchJobs: fetchListJobs,
      fetchLocations: fetchListLocalisation,
      increCounter: increCounterAction,
    },
    dispatch,
  );

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
