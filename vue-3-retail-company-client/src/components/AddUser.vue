<template>
  <div class="submit-form">

    <h4>Create User</h4>

    <div v-if="!submitted">

      <div class="form-group">
        <label for="name">Name</label>
        <input
          class="form-control"
          id="name"
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="last-name">Last name</label>
        <input
          class="form-control"
          id="last-name"
          v-model="user.last_name"
          name="last-name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="gov-id">Government issued ID</label>
        <input
          class="form-control"
          id="gov-id"
          v-model="user.gov_id"
          name="gov-id"
        />
      </div>

      <div class="form-group">
        <label for="campany">Company</label>
        <input
          class="form-control"
          id="company"
          v-model="user.company"
          name="company"
        />
      </div>

      <button @click="saveUser" class="btn btn-success">Submit</button>

    </div>

    <div v-else>
      <h4>You added a new user successfully!</h4>
      <button class="btn btn-success" @click="newUser">Create</button>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        email: "",
        name: "",
        last_name: "",
        gov_id: "",
        company: "",
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        email: this.user.email,
        name: this.user.name,
        last_name: this.user.last_name,
        gov_id: this.user.gov_id,
        company: this.user.company,
      };

      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
