<template>
  <div>
    <div class="top-content-container">
      <SubTitle class="top-title" name="Mutsuro Tatsuki's Portfolio Site"/>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'

export default {
  name: 'top',
  components: {
    SubTitle,
  },
}
</script>

<style lang="scss">
.top-content-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 80vh;
  .top-title {
    font-size: 1.5em;
  }
}
</style>