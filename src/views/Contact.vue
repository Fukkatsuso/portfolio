<template>
  <div>
    <SubTitle name="Contact" />
    <div class="contact">
      <table>
        <tr>
          <th><font-awesome-icon :icon="emailIcon" /></th>
          <td>mutsuro314@gmail.com</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default {
  name: 'Contact',
  components: {
    SubTitle,
  },
  data () {
    return {
      emailIcon: faEnvelope,
    }
  },
}
</script>

<style lang="scss">
.contact-card {
  width: 80%;
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  padding: 0.5em 1.5em;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
}

.contact {
  @extend .contact-card;
  text-align: left;
  table {
    width: 100%;
    margin: 0;
    padding: 0;
    tr {
      height: 2.5em;
      th {
        width: 25%;
        font-size: 1em;
      }
      td {
        font-size: 1em;
        width: 75%;
      }
    }
  }
}
</style>