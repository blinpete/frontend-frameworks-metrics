<script lang="ts" setup>
import { ref } from 'vue'
import ViewTable from './components/ViewTable.vue'
import useData from './useData'

const data = ref(useData())
console.log('[App] data:', data)
</script>

<template lang="pug">
header
  h1 Frontend Frameworks: GitHub Stats
main
  ViewTable(v-if="data" :data="data")
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

body {
  background-color: var(--gh-white);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  color: var(--gh-black);
}

header {
  text-align: center;
}
</style>
