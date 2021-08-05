<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <div class="input-group-append">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="user.id"
          @click="setActiveUser(user, index)"
        >
          {{ user.email }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentUser">
        <h4>User</h4>

        <div>
          <label><strong>ID:</strong></label> {{ currentUser.id }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentUser.email }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentUser.name }}
        </div>
        <div>
          <label><strong>Last name:</strong></label> {{ currentUser.last_name }}
        </div>

        <router-link :to="'/users/' + currentUser.id" class="badge badge-warning">Detail</router-link>
      </div>
  
      <div v-else>
        <br />
        <p>Please click on a User...</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      email: ""
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveusers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    },
    
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>