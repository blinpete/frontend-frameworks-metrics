<script setup>
import keys from '@/keys'

defineProps({
  data: Array,
})
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="k in keys" :class="k").key {{k}}
  tbody
    tr(v-for="item in data").entry
      td(v-for="k in keys") {{item[k]}}
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
