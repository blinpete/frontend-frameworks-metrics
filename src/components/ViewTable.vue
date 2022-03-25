<script setup>
import { metrics } from '@/metrics'

defineProps({
  data: Array,
})
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="m in metrics" :class="m.key").key {{m.alias}}
  tbody
    tr(v-for="item in data").entry
      td(v-for="m in metrics") {{item[m.key]}}
</template>

<style scoped>
thead {
  background-color: var(--gh-black);
  color: #fff;
}

th {
  padding: 8px 12px;
}

.entry td {
  background-color: #fff;
  padding: 5px;
}
</style>
