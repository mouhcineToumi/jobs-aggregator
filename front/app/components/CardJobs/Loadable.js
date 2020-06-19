/**
 *
 * Asynchronously loads the component for CardJobs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
