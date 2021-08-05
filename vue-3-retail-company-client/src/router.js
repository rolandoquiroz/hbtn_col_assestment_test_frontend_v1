import { createWebHistory, createRouter } from "vue-router";

import UsersList from "./components/UsersList"
import User from "./components/User"
import AddUser from "./components/AddUser"

const routes =  [
  {
    path: "/api/v1/users/all/",
    name: "get-users",
    component: UsersList
  },
  {
    path: "/api/v1/users/:id/",
    name: "get-user",
    component: User
  },
  {
    path: "/api/v1/users/",
    name: "post-user",
    component: AddUser
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;