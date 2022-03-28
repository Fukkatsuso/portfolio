<template>
  <nav>
    <router-link to="/">
      Top
    </router-link>
    <router-link to="/about">
      About
    </router-link>
    <router-link to="/skills">
      Skills
    </router-link>
    <router-link to="/works">
      Works
    </router-link>
    <router-link to="/contact">
      Contact
    </router-link>
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
  padding-left: 10%;
  @media screen and (max-width: 425px) {
    padding-left: 0;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    padding-top: 10px;
    padding-bottom: 7px;
    font-size: 15px;
    width: 16%;
    @media screen and (max-width: 425px) {
      width: 20%;
    }
  }
  a:hover {
    background-color: $secondary-color;
  }
  a.router-link-exact-active {
    border-bottom: 3px solid $sub-color;
    color: #ffffff;
  }
}
</style>