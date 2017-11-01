import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import { css } from 'glamor';

import Culture from './components/Culture';
import Mission from './components/Mission';
import Nav from './components/Nav';
import Voice from './components/Voice';

import { color, font } from './lib/theme';

/**
 * Template
 */

const App = () => (
  <BrowserRouter>
    <div className={container}>
      <Nav />
      <main className={content}>
        <Switch>
          <Route path="/culture" component={Culture} />
          <Route path="/voice-and-tone" component={Voice} />
          <Route path="/" component={Mission} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

/**
 * Styles
 */

/* Global Styles */

const global = css.global('html, body', {
  backgroundColor: color.black,
  color: color.black,
  fontFamily: font.default,
  margin: 0,
});

/* Component Styles */

const container = css({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
});

const content = css({
  backgroundColor: color.white,
  flexGrow: 1,
});

ReactDOM.render(<App />, document.getElementById('app-root'));
