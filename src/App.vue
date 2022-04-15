<script lang="ts" setup>
import { ref } from 'vue'
import ViewTable from './components/ViewTable.vue'
import useData from './useData'

import octicons from '@primer/octicons'

const heartIcon = octicons['heart-fill'].toSVG()
const data = ref(useData())
console.log('[App] data:', data)
</script>

<template lang="pug">
header
  h1 Frontend Frameworks
main
  ViewTable(v-if="data" :data="data")
footer
  div.sign Built with #[span(v-html="heartIcon").heart] on top of GitHub API
</template>

<style>
@import '@primer/octicons/build/build.css';
@import '@csstools/normalize.css';

a:any-link {
  color: inherit;
  text-decoration: none;
}

:root {
  --gh-white: hsl(204deg 33% 97%);
  --gh-black: hsl(210deg 12% 16%);
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
  font-family: Nunito, Spectral, Helvetica, sans-serif;
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

.sign .heart svg {
  color: hsl(200deg 10% 81%);
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
  margin-top: 60px;

  text-align: center;

  padding: 30px;

  /* inset text */
  color: transparent;
  background-clip: text;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);

  /* background-color: hsl(204deg 7% 80%); */
  background-color: hsl(204deg 14% 66%);

  font-family: Nunito, Helvetica, sans-serif;
  font-weight: 900;
}
</style>
