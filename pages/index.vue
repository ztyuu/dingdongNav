<template>
  <div>
    <div class="index">
      <SearchBar />
      <Link />
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: '叮咚导航'
    }
  }
})
</script>

<style scoped>
</style>
