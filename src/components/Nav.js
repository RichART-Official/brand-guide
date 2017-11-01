import React from 'react';
import { css } from 'glamor';
import { NavLink } from 'react-router-dom';

import { color, font, grid } from '../lib/theme';

const Nav = () => (
  <nav className={container}>
    <h1>Envy Labs<br />Brand Guide</h1>
    <NavLink to="/" exact>Mission</NavLink>
    <NavLink to="/culture">Culture</NavLink>
    <NavLink to="/voice-and-tone">Voice and Tone</NavLink>
  </nav>
);

const container = css({
  backgroundColor: color.black,
  color: color.white,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 1,
  padding: 2 * grid,
  minWidth: '12em',

  '& h1': {
    fontSize: font.up3,
    marginTop: 0,
    marginBottom: 1.5 * grid,
  },

  '& a': {
    alignItems: 'center',
    color: color.white,
    display: 'flex',
    height: grid,
    textDecoration: 'none',
  },

  '& .active': {
    color: `rgb(${color.green})`,
  },
});

export default Nav;
