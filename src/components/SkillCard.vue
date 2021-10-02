<template>
  <div class="skill-card">
    <h3 class="skil-name">{{ name }}</h3>
    <p class="skill-term">使用歴：{{ term }}</p>
    <p class="skill-content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    name: String,
    term: String,
    content: String,
  },
}
</script>

<style lang="scss">
.skill-card {
  width: 35%;
  max-width: 400px;
  margin: 0 1em 1em 1em;
  padding: 0 1.5em 0.5em 1.5em;
  @media screen and (max-width: 767px) {
    width: 80%;
    max-width: 400px;
    margin: 0 1em 1em 1em;
    padding: 0 1.5em 0.5em 1.5em;
  }  
}

.skill-card {
  text-align: left;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  .skil-name {
    font-size: 21px;
    margin-bottom: -5px;
  }
  .skill-term {
    color: #9e9e9e;
    font-size: 15px;
  }
  .skill-content {
    font-size: 16px;
  }
}

.skill-card:hover {
  box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.2);
}
</style>