import React from 'react';
import { css } from 'glamor';

import Page from './Page';

import { grid } from '../lib/theme';

const Culture = () => (
  <Page>
    <h1>Culture</h1>
    <h2>Core Values</h2>
    <h3 className={value}>We create more than we consume</h3>
    <p>
      Are we taking more than we‘re giving? Could we do more for our local
      community, the dev community, or our industry? Could we give our
      clients more?
    </p>
    <h3 className={value}>We lead by example</h3>
    <p>
      Are we simply calling for action instead of taking it upon ourselves?
      Do we solve problems before anyone asks us to? Are we following our own
      best advice?
    </p>
    <h3 className={value}>We seek understanding before solutions</h3>
    <p>
      Do we know what we don‘t know? Have we met the people who have to live
      with our technology decisions? Could we pull in scholars and historians
      rather than guessing and trying it our way?
    </p>
  </Page>
);

const value = css({
  counterIncrement: 'index',
  position: 'relative',

  '::before': {
    content: 'counter(index)". "',
    position: 'absolute',
    right: `calc(100% + ${0.25 * grid}px)`,
  },
});

export default Culture;
