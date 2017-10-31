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
    <div className={app}>
      <Nav />
      <main>
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
  color: color.black,
  fontFamily: font.default,
  margin: 0,
});

/* Component Styles */

const app = css({
  display: 'flex',
  minHeight: '100vh',
});

ReactDOM.render(<App />, document.getElementById('app-root'));
