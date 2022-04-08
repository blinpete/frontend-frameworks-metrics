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
}

.cell-wrapper a {
  display: flex;
  align-items: center;
}

/* Metric-specific styles */
.repo .cell-wrapper {
  justify-content: center;
}

.framework span {
  font-weight: bold;
  margin-left: 5px;
}
.framework:hover span {
  text-decoration: underline;
  text-decoration-thickness: from-font;
}

.framework img {
  border-radius: 30%;
  /* box-shadow: -1px 1px 2px 0px rgb(175, 175, 175); */
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
  opacity: 0.55;
}

td.languages .cell-wrapper {
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
}
td.languages .percent {
  opacity: 0.55;
}

td.created,
td.updated {
  text-align: center;
}
</style>

<style scoped>
table {
  width: min(100%, 1300px);
  border-collapse: separate;
  border-spacing: 0;
  margin: 0 auto;
}

thead {
  color: #fff;
}

thead th {
  padding: 10px 12px;
  vertical-align: bottom;

  position: sticky;
  top: 0;

  background-color: var(--gh-black);
  z-index: 1;
}
th .title {
  display: flex;
  justify-content: center;
}
th .info {
  /* font-weight: normal; */
  font-size: 0.65em;
  opacity: 0.35;
}
th:not(:last-of-type) {
  border-right: 2px hsl(0, 5%, 89%) solid;
  /* border-right: 1px hsl(210, 9%, 29%) solid; */
}

table {
  --border-radius: 5px;
}

th:first-of-type {
  border-top-left-radius: var(--border-radius);
}
th:last-of-type {
  border-top-right-radius: var(--border-radius);
}

tbody {
  color: hsl(0, 0%, 30%);
}

tbody td:not(:last-child) {
  border-right: 2px hsl(0, 0%, 97%) solid;
  /* border-radius: 10px; */
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
  border-bottom: 1px hsl(0, 0%, 96%) solid;
}
</style>
