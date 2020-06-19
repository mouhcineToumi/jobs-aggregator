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
import Container from '@material-ui/core/Container';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Container maxWidth="sm">
        <Header />
        <CardJobs />
      </Container>
    </div>
  );
}
