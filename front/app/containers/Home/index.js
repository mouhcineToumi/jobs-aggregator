/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/**
 *
 * Home
 *
 */

import React, { memo, useEffect } from 'react';
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
import makeSelectHome, { selectAllJobs } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchListJobs } from './actions';

const jobstest = [
  {
    _id: {
      $oid: '5efe3bc4cab55066c34d3a95',
    },
    url:
      'https://ma.indeed.com/rc/clk?jk=c78a272c52cc8b76&fccid=dd616958bd9ddc12&vjs=3',
    id: 'c78a272c52cc8b76_dd616958bd9ddc12',
    company: '',
    location: 'Casablanca',
    date: {
      $date: '2020-07-02T20:55:48.727Z',
    },
    description:
      "youssef DÉVELOPPEUR WEB \n Casablanca \n Publiée le: 2 Jul-11:29 \n Vue: 28 \n Annonce N°: 8330209\n Nous sommes une société de la distribution des offres et services de téléphonie mobile, travaille en partenariat avec orange et nous sommes à la recherche d'un développeur web à casablanca \nprofil demandébac+2 ou plus en développement informatique \ndéveloppement web php..base de donnée : mysql, pgsql, \nenvoyez votre cv.\n Domaine : Informatique / Multimédia / Internet \n Fonction : Informatique - Développement \n Type de contrat : A discuter \n Nom de la société : FIRST TELECOM \n Salaire : A discuter \n Niveau d'études : Bac plus 2",
    title: 'DÉveloppeur web',
  },
  {
    _id: {
      $oid: '5efe3bc4cab55066c34d3a96',
    },
    url:
      'https://ma.indeed.com/rc/clk?jk=da92d2f3a6248d84&fccid=8c086c865fe18da4&vjs=3',
    id: 'da92d2f3a6248d84_8c086c865fe18da4',
    company: 'KECHWEB',
    location: 'Casablanca',
    date: {
      $date: '2020-07-02T20:55:48.866Z',
    },
    description:
      'Kechweb est une société de divers travaux informatiques (développement informatique etc...). elle est composée de jeunes spécialistes en informatique dynamiques, persévérants et enthousiastes pour concevoir, développer et réaliser les objectifs des clients. on cherche un développeur web très motivant pour le poste : développeur web maîtrise parfaitement le développement des plugins, thèmes, modules pour cms (wordpress, joomla, prestashop, dolibarr).',
    title: 'Développeur web',
  },
];

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

export function Home({ fetchJobs, Jobs }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  const classes = useStyles();
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    fetchJobs();
  }, {});

  return (
    <>
      <Container className={classes.cont} maxWidth="md">
        <Header search={search} setSearch={setSearch} />
        <div className={classes.beet}>
          <Typography
            align="center"
            color="textSecondary"
            className={classes.text}
          >
            <span>{jobstest.length} job(s) available</span>
          </Typography>
          <Divider />
        </div>
        <FilterResults
          value={search}
          data={jobstest}
          renderResults={results => (
            <div>
              {results.map(job => (
                <CardJobs job={job} />
              ))}
            </div>
          )}
        />
      </Container>
    </>
  );
}

Home.propTypes = {
  Jobs: PropTypes.array.isRequired,
  fetchJobs: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Jobs: selectAllJobs,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchJobs: fetchListJobs,
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
