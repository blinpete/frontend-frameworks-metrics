<script lang="ts" setup>
import { metrics, metricsSortable } from '@/metrics'
import type { FrameworkMetrics } from '@/metrics'
import useSortable, { includes } from './useSortable'

const props = defineProps<{ data: FrameworkMetrics[] }>()

const { dataSorted, toggleSort, getSorterClass } = useSortable(props.data)
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(
        v-for="m in metrics"
        :class="[m.name, {sortable: includes(metricsSortable, m.name)}, getSorterClass(m.name)]"
        @click="() => toggleSort(m.name)"
      )
        //- div(v-if="m.icon" v-html="m.icon")
        div.name {{m.name}}
        div(v-if="m.shortDesc").info {{m.shortDesc}}
  tbody
    tr(v-for="repo in dataSorted").entry
      td(v-for="m in metrics" :class="m.name")
        div(v-if="repo[m.name].html" v-html="repo[m.name].value").cell-wrapper
        template(v-else) {{repo[m.name].value}}
</template>

<style lang="postcss">
@import './sortable.pcss';

.cell-wrapper {
  display: flex;

  & a {
    display: flex;
    align-items: center;
  }
}

/* Metric-specific styles */
.repo .cell-wrapper {
  justify-content: center;
}

.framework {
  & span {
    font-weight: bold;
    margin-left: 5px;
  }
  &:hover span {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  & img {
    border-radius: 30%;
    /* box-shadow: -1px 1px 2px 0px rgb(175, 175, 175); */
  }

  /* & .version {
    opacity: 0.4;
    font-weight: normal;
    font-size: 0.75em;
    margin-left: 4px;
    position: relative;
    bottom: -1px;
  } */
}

tbody {
  & td:not(:where(.framework, .repo, .version, .languages)) {
    font-size: 0.92em;
    font-weight: 500;
  }
}

td.version {
  & .cell-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    text-align: center;
  }

  & .publishedAt {
    opacity: 0.55;
  }
}

td.version,
td.languages {
  padding-top: 7px;
  padding-bottom: 6px;
}

td.languages {
  & .cell-wrapper {
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
  }

  white-space: nowrap;

  & .percent {
    opacity: 0.55;
  }
}

td.created,
td.updated {
  text-align: center;
}

/* --------------------------- table/thead/tbody styles ------------------- */
table {
  width: min(100%, 1300px);
  border-collapse: separate;
  border-spacing: 0;
  margin: 0 auto 40px;
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
th {
  & .title {
    display: flex;
    justify-content: center;
  }

  & .info {
    /* font-weight: normal; */
    font-size: 0.65em;
    opacity: 0.4;
  }

  &:not(:last-of-type) {
    /* border-right: 2px hsl(0, 5%, 89%) solid; */
    border-right: 2px hsl(210, 9%, 29%) solid;
  }

  user-select: none;
  cursor: default;
}

/* upper corners */
thead {
  --border-radius: 5px;

  & th:first-of-type {
    border-top-left-radius: var(--border-radius);
  }
  & th:last-of-type {
    border-top-right-radius: var(--border-radius);
  }
}

tbody {
  color: hsl(0, 0%, 30%);

  & td:not(:last-child) {
    border-right: 2px hsl(0, 0%, 97%) solid;
    /* border-right: 2px var(--gh-white) solid; */
    /* border-right: 5px transparent solid; */
  }

  & tr {
    background-color: #fff;
  }

  & tr:hover {
    background-color: hsl(0, 0%, 96%);
    /* background-color: var(--gh-white); */
  }

  & td {
    background-color: inherit;
    padding: 8px;
    border-bottom: 1px hsl(0, 0%, 96%) solid;
    /* border-bottom: 2px var(--gh-white) solid; */
  }
}
</style>
