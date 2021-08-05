<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Retail Company</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/api/v1/users/all/" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/api/v1/users/" class="nav-link">Create</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
