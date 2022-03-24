<template>
  <div class="work-card">
    <h3 class="work-name">
      {{ name }}
    </h3>
    <p class="work-timing">
      {{ timing }}
    </p>
    <p class="work-content">
      {{ content }}
    </p>
    <p class="work-tech">
      {{ tech }}
    </p>
    <a
      v-if="link"
      :href="link"
      target="_blank"
    >
      <font-awesome-icon
        class="work-link-icon"
        :icon="workLinkIcon"
      />
    </a>
  </div>
</template>

<script>
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'WorkCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: '',
    },
  },
  data () {
    return {
      workLinkIcon: faExternalLinkAlt
    }
  },
}
</script>

<style lang="scss">
.work-card {
  width: 60%;
  max-width: 500px;
  margin: 0 1em 1em 1em;
  padding: 0 1.5em 0.5em 1.5em;
  @media screen and (max-width: 767px) {
    width: 70%;
    max-width: 500px;
    margin: 0 1em 1em 1em;
    padding: 0 1.5em 0.5em 1.5em;
  }
}

.work-card {
  $primary-color: #009688;
  $secondary-color: #00897b;
  $sub-color: #4dd0e1;
  position: relative;
  text-align: left;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  .work-name {
    font-size: 21px;
    margin-bottom: -5px;
  }
  .work-timing {
    color: #9e9e9e;
    font-size: 15px;
  }
  .work-content {
    font-size: 16px;
    margin-bottom: 1.5em;
  }
  .work-tech {
    font-size: 14px;
  }
  .work-link-icon {
    color: $sub-color;
    font-size: 1.5em;
    position: absolute;
    right: 1em;
    bottom: 1em;
  }
}

.work-card:hover {
  box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.2);
}
</style>