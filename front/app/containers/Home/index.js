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
      $oid: '5eeb1fb93c4428936366caaf',
    },
    url:
      'https://ma.indeed.com/rc/clk?jk=f2d08261ef9fa2ef&fccid=c345b06b9f22e507&vjs=3',
    id: 'f2d08261ef9fa2ef_c345b06b9f22e507',
    company: 'discover our recruitment process',
    location: 'Salé',
    date: "24/06/2020",
    description:
      "Au sein d’une équipe projet fonctionnant en mode collaboratif et Agile scrum, Kanban, X Programing, vous serez l’un des développeurs, travaillant en coordination avec le Product-Owner, le Scrum Master, Software analyst, et équipes partenaires. \nDans ce contexte Agile, vous effectuerez différentes tâches : \n L’estimation du niveau d’effort de développement des User stories \n La définition des spécifications détaillées à partir des User stories \n Le développement selon une architecture logicielle établie \n la conduite des tests unitaires et d’intégration 2 à 2 \n Le développement des outillages de test associés \n L’automatisation et l’industrialisation des opérations régulières (process de build, les tests, les audits de qualité de code, la containerisation du code, …) \n La préparation des packages de livraison (mode devops) \n Vous assurez le support technique et la maintenance corrective et adaptative des éléments délivrés \n Vous animer l’équipe de développeurs \nVous êtes en relation avec le Product Owner pour gérer le backlog et définir les US \n about you\n Vous avez une formation Bac+5 Ingénieur/Master 2 en développement logiciel. \n Vous avez de 5 à 8 ans d'expérience de développement avec Java/JEE et les frameworks Spring / Hibernate, Junit/Mockito, Maven, Angular \n Vous pratiquez les architectures micro services, les environnements XaaS, et vous savez créer des composants (REST pour les API) réutilisables \n Vous savez présenter une solution disruptive, argumenter et convaincre \n Vous adhérez aux valeurs de l'agilité, et vous maitrisez les outils de gestion agiles et collaboratifs tels que Jira / Confluence. \n Vous avez une forte appétence pour le travail en équipe et une bonne aisance relationnelle \n Vous savez écouter le client et ses utilisateurs, et traduire ses besoins en exigences ou propositions de solution à travers une architecture logicielle adaptée \n Vos connaissances dans le domaine des réseaux et Télécom seront très appréciées \n \n additional information \n \n department\n Customer Marketing& Innovation \n \n contract\n Regular",
    title: 'Software Engineer',
  },
  {
    _id: {
      $oid: '5eeb1fb93c4428936366cab0',
    },
    url:
      'https://ma.indeed.com/rc/clk?jk=c1f634088b6cdedf&fccid=cfbbc86861e56bf6&vjs=3',
    id: 'c1f634088b6cdedf_cfbbc86861e56bf6',
    company: 'Oritech',
    location: 'Casablanca',
    date: "Publiée à l'instant",
    description:
      "Dans le cadre de notre développement, nous recherchons un développeur Full Stack en stage de pré-embauche. \n Department:  Software Engineering \n Project Location(s):  Casablanca, Maroc \n Education:  Diplôme d'ingénieur \nMissions \n \nVous aurez l’opportunité d’intervenir sur les différentes étapes du cycle de vie d’un projet de sa phase de conception à sa mise en production. Vos missions principales seront : \n \n Participation à la définition des spécifications techniques du projet ; \n Conception de l’architecture de l’application ; \n Développement de l’application en Java (Back-end et Front-end) ; \n Mise en place des tests unitaires, d’intégration, de performance et de montée en charge ; \n Rédaction de la documentation fonctionnelle et technique du produit. \n Profil Recherché \n \nVous êtes diplômé d’une école d’ingénieur et vous justifiez d’un socle technique solide acquis à travers vos études et vos stages ; Curieux et passionné des nouvelles technologies, vous avez le sens du service et êtes sensible aux processus d’ingénierie et de qualité logicie \n \nCompétences requises : \n Spring Framework (en particulier Spring MVC), Hibernate/JPA, Maven ; \n Serveurs d’application (Tomcat) et bases de données relationnelles (MySQL) ; \n HTML 5, CSS 3, Javascript. \n La connaissance de jQuery et d’AngularJS ou d’un framework MVC équivalent sera fortement appréciée.",
    title: 'Full Stack Developer',
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
