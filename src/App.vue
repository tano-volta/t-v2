
<template>
  <nav>
    <router-link to="/team" class="ternav">Structure</router-link> | 
    <router-link to="/contact" class="secnav">Contact</router-link> |
    <router-link to="/" class="mainnav">About TASZ</router-link> | 
    <router-link to="/events" class="secnav">Events</router-link> | 
    <router-link to="/gallery" class="ternav">Gallery</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #f9706e;
}

.mainnav {
  font-size: xx-large;
}
.secnav{
  font-size: x-large;
}
.ternav{
  font-size: large;
}

</style>
