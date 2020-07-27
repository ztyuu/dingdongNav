<template>
  <div>
    <div class="index">
      <SearchBar />
      <Link />
      <component is="HotTopic" />
    </div>
  </div>
</template>

<script>
import HotTopic from '../components/HotTopic'
export default {
  head () {
    return {
      title: '叮咚导航'
    }
  },
  components:{
    HotTopic
  }
}
</script>

