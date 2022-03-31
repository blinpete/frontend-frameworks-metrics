<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import ViewTable from './components/ViewTable.vue'
import useData from './useData'
import type { RepoFragmentFragment } from './graphql'

const data = ref<null | RepoFragmentFragment[]>(null)

onMounted(async () => {
  data.value = await useData()
})

console.log('[App] data:', data)
</script>

<template lang="pug">
header
  h1 Frontend Frameworks: GitHub Stats
main
  ViewTable(v-if="data" :data="data")
</template>

<style>
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
