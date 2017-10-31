import React from 'react';
import { css } from 'glamor';

import Page from './page';

import { color, grid, font } from '../lib/theme';

const Voice = () => (
  <Page>
    <h1>Voice and Tone</h1>
    <h2>Grammar</h2>
    <h4>Pronouns</h4>
    <section className={rule}>
      <article>
        Use “we” for Envy Labs. Don’t use “it.” Also, try to keep it plural
        (“are” rather than “is”).
      </article>
      <article className={example}>
        We at Envy Labs are proud to announce coffee is ready in the kitchen.
      </article>
    </section>
    <h4 className={quote}>Log In” vs “Login”</h4>
    <section className={rule}>
      <article>
        Two words indicate a verb; one indicates a noun. When in doubt, the
        past-tense makes it clear: have you “logged in” or “loginned?”
      </article>
      <article className={example}>
        Please press the <kbd>Log In</kbd> button below.
      </article>
    </section>
    <h2>Syntax</h2>
    <h4>Orphans</h4>
    <section className={rule}>
      <article>
        An orphan is when the last word in a paragraph hangs on its own<br />line.
      </article>
      <article className={`${example} ${doThis}`}>
        Use the no-break space character (<code>&amp;nbsp;</code>, <code>
        U+00A0</code>) between the last two words. Open the Character Viewer
        with <kbd>^ + ⌘ + Space</kbd>.
      </article>
    </section>
    <h4>Dumb Quotes</h4>
    <section className={rule}>
      <article>
        Straight quotes (<code>'</code>, <code>"</code>) were a cost-cutting
        measure from the typewriter days to get away with using 2 keys
        instead of 4. But they’ve never been “proper.” Nowadays, smart quotes
        are free! Use them!
      </article>
      <article className={`${example} ${doThis}`}>
        Use <code>“”</code> and <code>‘’</code> whenever using quote marks. On Mac:
        <ul>
          <li><kbd>Alt + [</kbd></li>
          <li><kbd>Shift + Alt + [</kbd></li>
          <li><kbd>Alt + ]</kbd></li>
          <li><kbd>Alt + Shift + ]</kbd></li>
        </ul>
      </article>
    </section>
    <h4>Math + Units of Measurement</h4>
    <section className={rule}>
      <article>
        Plus (<code>+</code>) and minus(<code>-</code>) are easy to find,
        but your keyboard doesn’t have symbols for multiplication or inches
        or feet.
      </article>
      <article className={`${example} ${doThis}`}>
        Use <code>×</code> for multiplication, <code>″</code> for
        inches <em>(double prime)</em>, and <code>′</code> for
        feet <em>(prime)</em>. All can be found within the Character Viewer
        (<kbd>^ + ⌘ + Space</kbd>).
      </article>
    </section>
    <h2>Purpose</h2>
    <h4>Excited</h4>
    <section className={rule}>
      <article>
        Good news always elicits a positive emotion. The emotion must be
        overtly stated, or at least strongly implied. As a consultancy where our
        opinion is valuable, adding phrases like “good news! 🎉” or “this is
        awesome!” lets people in on our values. The sillier and more
        embarrassing the subject of excitement, the better.
      </article>
      <article>
        Don’t offer facts or news without the accompanying feeling or emotion.
      </article>
      <article className={`${good}`}>
        <em>[pic of Nate holding a lightsaber in a kung-fu-esque stance]</em><br />
        You could say we’re pretty excited about The Last Jedi, yeah.
      </article>
      <article className={`${good} ${bad}`}>
        Star Wars comes out tomorrow.
      </article>
    </section>
  </Page>
);

/* Rule */

const rule = css({
  display: 'grid',
  fontSize: font.down1,
  gridColumnGap: grid,
  gridRowGap: 1.5 * grid,
  gridTemplateColumns: '1fr 1fr',
  lineHeight: 1.75,
  marginBottom: grid,
  marginLeft: grid,
});

/* Simple Example */

const example = css({
  boxShadow: `inset 2px 0 rgb(${color.green})`,
  lineHeight: 1.5,
  paddingLeft: 0.5 * grid,
  position: 'relative',

  '::before': {
    bottom: '100%',
    color: `rgb(${color.green})`,
    content: 'Example',
    fontWeight: 700,
    left: 0,
    lineHeight: 2,
    position: 'absolute',
  },
});

const doThis = css({
  '::before': {
    content: 'Do This',
  },
});

/* Good / Bad */

const good = css({
  position: 'relative',
  boxShadow: `inset 2px 0 rgb(${color.green})`,
  paddingLeft: 0.5 * grid,

  '::before': {
    bottom: '100%',
    color: `rgb(${color.green})`,
    content: '"Good"',
    fontWeight: 700,
    left: 0,
    lineHeight: 2,
    position: 'absolute',
  },
});

const bad = css({
  boxShadow: `inset 2px 0 rgb(${color.red})`,

  '::before': {
    content: '"Bad"',
    color: `rgb(${color.red})`,
  },
});

/* Utility */

const quote = css({
  position: 'relative',

  '::before': {
    content: '"“"',
    position: 'absolute',
    right: '100%',
  },
});

export default Voice;
