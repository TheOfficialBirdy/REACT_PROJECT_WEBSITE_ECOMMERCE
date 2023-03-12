import './App.css';
import { Component, useState, FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import PNF_PAGE_JSX from './PAGES/PAGE_NOT_FOUND';
import SIGNUP_PAGE_JSX from './PAGES/Log/Signup';
import LOGIN_PAGE_JSX from './PAGES/Log/Login';
import HOME_PAGE_JSX from './PAGES/Home/Home';

interface ROUTE_KEYPAIR { Path: string, Element: JSX.Element };
interface ROUTESINJINT { PAGE_NOT_FOUND: ROUTE_KEYPAIR, SIGNUP: ROUTE_KEYPAIR, LOGIN: ROUTE_KEYPAIR, HOME: ROUTE_KEYPAIR }; // Routes Inject Interface
const DEFAULT_ROUTES_INJECT: ROUTESINJINT = { // Hard code issue (API - Express);
  HOME : { Path: '/', Element: <HOME_PAGE_JSX /> },
  PAGE_NOT_FOUND : { Path: '*', Element: <PNF_PAGE_JSX /> },
  SIGNUP : { Path : '/sign-up', Element: <SIGNUP_PAGE_JSX /> },
  LOGIN : { Path : '/login', Element: <LOGIN_PAGE_JSX /> },
}; // Need to get from API Service
const Application: FC = (): JSX.Element => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path={DEFAULT_ROUTES_INJECT.PAGE_NOT_FOUND.Path} element={DEFAULT_ROUTES_INJECT.PAGE_NOT_FOUND.Element}></Route>
        <Route path={DEFAULT_ROUTES_INJECT.SIGNUP.Path} element={DEFAULT_ROUTES_INJECT.SIGNUP.Element}></Route>
        <Route path={DEFAULT_ROUTES_INJECT.LOGIN.Path} element={DEFAULT_ROUTES_INJECT.LOGIN.Element}></Route>
        <Route path={DEFAULT_ROUTES_INJECT.HOME.Path} element={DEFAULT_ROUTES_INJECT.HOME.Element}></Route>
      </Routes>
    </Router>
  );
};



export default Application;
