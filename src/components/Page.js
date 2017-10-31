import React from 'react';
import { css } from 'glamor';

import { color, font, grid } from '../lib/theme';

const Page = props => (
  <div className={container}>
    {props.children}
  </div>
);

const container = css({
  paddingBottom: 2 * grid,
  paddingLeft: 2 * grid,
  paddingRight: 2 * grid,
  paddingTop: 2 * grid,

  '& h1': {
    fontSize: font.up6,
    marginTop: 0,
    marginBottom: 2 * grid,
  },

  '& h2': {
    fontSize: font.up4,
    marginBottom: grid,
    marginTop: 2 * grid,
  },

  '& h3': {
    fontSize: font.up2,
    marginBottom: 0.25 * grid,
    marginLeft: grid,
    marginTop: grid,
  },

  '& h4': {
    letterSpacing: '0.05em',
    marginBottom: 0.25 * grid,
    marginLeft: grid,
    marginTop: grid,
    textTransform: 'uppercase',
  },

  '& code': {
    backgroundColor: color.grayT,
    borderRadius: 2,
    boxShadow: '0 0 0 1px #ccc',
    color: color.gray,
    fontFamily: 'Menlo, monospace',
    fontSize: font.down1,
    padding: '0.375em 0.5em',
  },

  '& ul, & ol': {
    marginLeft: 0,
    paddingLeft: 0,
  },

  '& kbd': {
    backgroundColor: 'white',
    borderRadius: 2,
    boxShadow: `0 1px ${color.gray}`,
    fontFamily: 'Menlo, monospace',
    fontSize: font.down1,
    fontWeight: 700,
    padding: '0.375em 0.5em',
    whiteSpace: 'nowrap',
  },

  '& p': {
    fontSize: font.up1,
    lineHeight: 1.75,
    marginBottom: 0,
    marginLeft: grid,
    marginTop: 0,
    maxWidth: '32em',

    '& + p': {
      marginTop: grid,
    },
  },
});

export default Page;
