<template>
  <div class="sub-title">
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    name: String
  }
}
</script>

<style>
.sub-title {
  text-align: center;
  margin-top: 70px;
  font-size: 1.2em;
}
</style>