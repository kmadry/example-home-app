import React from 'react';

const Site3 = React.lazy(() => import('./components/site3'));
const Site4 = React.lazy(() => import('./components/site4'));

const routes = [
  {
    path: '/',
    element: <>main</>,
  },
  {
    path: '/site3',
    element: <Site3/>,
  },
  {
    path: '/site4',
    element: <Site4/>,
  },
];

export default routes;