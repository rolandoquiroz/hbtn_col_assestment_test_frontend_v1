<template>
  <div v-if="currentUser" class="edit-form">
      <div v-if="currentUser">

        <h4>User</h4>

        <div>
          <label><strong>ID:</strong></label> {{ currentUser.id }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentUser.name }}
        </div>
        <div>
          <label><strong>Last name:</strong></label> {{ currentUser.last_name }}
        </div>
        <div>
          <label><strong>Government issued ID:</strong></label> {{ currentUser.gov_id }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentUser.email }}
        </div>
        <div>
          <label><strong>Company:</strong></label> {{ currentUser.company }}
        </div>
  
      </div>

    <p>{{ message }}</p>
  </div>



  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "user",
  data() {
    return {
      currentUser: null,
      message: ''
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then(response => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

  },
  mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>