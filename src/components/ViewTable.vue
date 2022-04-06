<script lang="ts" setup>
import { metrics } from '@/metrics'
import type { FrameworkMetrics } from '@/metrics'

defineProps<{ data: FrameworkMetrics[] }>()
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="m in metrics" :class="m.name")
        //- div(v-if="m.icon" v-html="m.icon")
        div.name {{m.name}}
        div(v-if="m.shortDesc").info {{m.shortDesc}}
  tbody
    tr(v-for="repo in data").entry
      td(v-for="m in metrics" :class="m.name")
        div(v-if="repo[m.name].html" v-html="repo[m.name].value").cell-wrapper
        template(v-else) {{repo[m.name].value}}
</template>

<style>
.cell-wrapper {
  display: flex;
  /* justify-content: center; */
}

.cell-wrapper a {
  display: flex;
  align-items: center;
}

.cell-wrapper img + span {
  margin-left: 5px;
}

/* Metric-specific styles */
.repo .cell-wrapper {
  justify-content: center;
}

.framework span {
  font-weight: bold;
  opacity: 0.9;
}

.framework img {
  border-radius: 30%;
  /* box-shadow: -1px 1px 2px 0px rgb(175, 175, 175); */
  /* box-shadow: -1px 1px 2px 1px rgb(212, 212, 212); */
}

/* .framework .version {
  opacity: 0.4;
  font-weight: normal;
  font-size: 0.75em;
  margin-left: 4px;
  position: relative;
  bottom: -1px;
} */

td.version .cell-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  text-align: center;
}
td.version .publishedAt {
  opacity: 0.5;
}

td.languages .cell-wrapper {
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
}
td.languages .percent {
  opacity: 0.5;
}
</style>

<style scoped>
table {
  width: 100%;
}

thead {
  background-color: var(--gh-black);
  color: #fff;
}

th {
  padding: 10px 12px;
  vertical-align: bottom;
}
th .title {
  display: flex;
  justify-content: center;
}

th .info {
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.6;
}

tbody {
  color: hsl(0, 0%, 30%);
}

tbody tr {
  background-color: #fff;
}

tbody tr:hover {
  background-color: hsl(0, 0%, 95%);
}

tbody td {
  background-color: inherit;
  padding: 8px;
}
</style>
