<template>
  <nav>
    <ul>
      <router-link tag="li" to="/">
        <a>Top</a>
      </router-link>
      <router-link tag="li" to="/about">
        <a>About</a>
      </router-link>
      <router-link tag="li" to="/skills">
        <a>Skills</a>
      </router-link>
      <router-link tag="li" to="/works">
        <a>Works</a>
      </router-link>
      <router-link tag="li" to="/contact">
        <a>Contact</a>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss">
nav {
  $primary-color: #009688;
  $secondary-color: #00897b;
  $sub-color: #4dd0e1;
  background-color: $primary-color;
  position: fixed;
  z-index: 8;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  ul {
    display: table;
    margin: 0 auto;
    padding: 0;
    width: 80%;
    @media screen and (max-width: 425px) {
      width: 100%;
    }
    text-align: center;
    li {
      display: table-cell;
      padding: 10px 0 0 0;
      width: 18%;
      @media screen and (max-width: 425px) {
        width: 20%;
      }
    }
    li:hover {
      background-color: $secondary-color;
    }
    li a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
      padding-bottom: 7px;
      font-size: 15px;
    }
    li.router-link-exact-active a {
      border-bottom: 3px solid $sub-color;
      color: #ffffff;
    }
  }
}
</style>