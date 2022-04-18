<script lang="ts" setup>
import { ref } from 'vue'
import ViewTable from './components/ViewTable.vue'
import useData from './useData'

import octicons from '@primer/octicons'

const heartIcon = octicons['heart-fill'].toSVG()
const data = ref(useData())
</script>

<template lang="pug">
header
  h1 Frontend Frameworks
  a.this-repo-link(href="https://github.com/blinpete/frontend-frameworks-stats")
    span(v-html="octicons['mark-github'].toSVG({width: 30})")
    span(v-html="octicons['mark-github'].toSVG({width: 30})").inset
main
  ViewTable(v-if="data" :data="data")
footer
  div.sign Built with #[span(v-html="heartIcon").heart] on top of #[a.api(href="https://docs.github.com/en/graphql") GitHub API]
</template>

<style lang="postcss">
@import '@primer/octicons/build/build.css';
@import '@csstools/normalize.css';

a:any-link {
  color: inherit;
  text-decoration: none;
}

:root {
  --gh-white: hsl(204deg 33% 97%);
  --gh-black: hsl(210deg 12% 16%);

  --white-darker-icon: hsl(200deg 8% 83%);

  /* --white-darker-text: hsl(200deg 8% 80%); */
  --white-darker-text: hsl(200deg 14% 81%);

  /* --white--darker-text-inset: hsl(204deg 7% 80%); */
  /* --white--darker-text-inset: hsl(204deg 14% 66%); */
  /* --white--darker-text-inset: hsl(204deg 11% 73%); */
  --white--darker-text-inset: hsl(204deg 17% 76%);
}

html,
body,
#app {
  min-height: 100%;
}

body {
  background-color: var(--gh-white);
  color: var(--gh-black);

  background: linear-gradient(to top, hsl(204deg 22% 95%), var(--gh-white));

  font-family: Helvetica, sans-serif;
}

header h1 {
  text-align: center;
  font-weight: 900;
  font-family: Nunito, Helvetica, sans-serif;
  font-size: 60px;

  position: relative;

  opacity: 0.96;

  /* inset text */
  color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  background-color: hsl(204deg 7% 80%);

  /* background-color: hsl(204deg 6% 70%); */
  /* background-color: hsl(204deg 7% 76%); */

  /* color: hsl(210deg 5% 75%); */
  /* color: hsl(204deg 7% 76%); */
}

a.this-repo-link {
  color: hsl(207deg 7% 79%);

  & span {
    position: absolute;

    right: 30px;
    top: 30px;

    transition: color 150ms;
  }

  & span:last-child {
    color: rgba(255, 255, 255, 0.5);
    transform: translate(1px, 1px);
  }

  &:hover {
    & span:first-child {
      color: var(--gh-black);
      color: hsl(210deg 8% 26%);
    }

    & span:last-child {
      color: rgba(255, 255, 255, 0.05);
    }
  }
}

.sign .heart svg {
  color: var(--white-darker-icon);
  position: relative;
  top: 2px;
  transition: color 300ms;
  transform: scale(0.85);
}
.sign:hover .heart svg {
  color: hsl(0 65% 65%);
  /* transform: scale(1.05); */
  /* top: 1px; */
}
footer {
  text-align: center;

  margin-top: 60px;
  padding: 30px;

  /* plain text */
  /* color: hsl(201deg 18% 75%); */

  /* inset text */
  color: transparent;
  background-clip: text;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  background-color: var(--white--darker-text-inset);

  font-family: Nunito, Helvetica, sans-serif;
  font-weight: 900;

  & a.api {
    position: relative;
    color: var(--white-darker-text);
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  & .links {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
