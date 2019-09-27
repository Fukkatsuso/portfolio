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

<style>
nav {
  background-color: #673ab7;
  position: fixed;
  z-index: 8;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
}

nav ul {
  display: table;
  margin: 0 auto;
  padding: 0;
  width: 80%;
  text-align: center;
}

nav ul li {
  display: table-cell;
  padding: 10px 0 0 0;
  width: 18%;
}

nav ul li:hover {
  background-color: #9575cd;
}

nav ul li a {
  display: block;
  width: 100%;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 7px;
  font-size: 15px;
}

nav ul li.router-link-exact-active a {
  border-bottom: 3px solid #9575cd;
  color: #ffffff;
  /* border-bottom: 3px solid #2196f3; */
}
</style>