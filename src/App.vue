<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img alt="Vue logo" src="@/assets/pokeball.svg" height="50" width="50" />
    </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link :to="{name: 'PokemonView'}">Pokemon</router-link>
      </a>
    </div>
  </div>
</nav>
<router-view />
  
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
  color: #42b983;
}
</style>
