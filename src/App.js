import React, { lazy, Suspense, useState } from 'react'; // Must be imported for webpack to work
import styles from './App.module.css';
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import './MuiClassNameSetup';
import localRoutes from './routes.js';
import remoteRoutes from 'SitesApp/routes';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('HeaderApp/Footer'));

const RenderRoutes = ({routes, prev = ""}) => routes.map(route => (
  <li key={route.path}>
    <Link to={prev + route.path}>To {prev + route.path}</Link>
    {route.children ? <RenderRoutes routes={route.children} prev={prev + route.path + "/"} /> : null}
  </li>
))

const Layout = ({routes}) => (
  <>
    <ul>
      <RenderRoutes routes={routes} />
    </ul>
    <Outlet />
  </>
);

const routes = [...localRoutes, ...remoteRoutes];

const getRoutes = (routes) => [
    {
      element: <Layout routes={routes}/>,
      children: routes
    }
  ];

function App() {
  const [state, setState] = useState('before click');
  const click = () => setState('afterClick');
  return (
    <div className={styles.App}>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading Routes...</div>}>
        <RouterProvider router={createBrowserRouter(getRoutes(routes))} />
      </Suspense>
      <div className="container">State: {state}</div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer date={"2023"} click={click} />
      </Suspense>
    </div>
  );
}

export default App;