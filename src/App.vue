<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <router-link to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <h1 class="logo navbar-brand">Cooking 101</h1>
      </router-link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-secondary">Home</router-link></li>
        <li><router-link :to="{name: 'RecipesList'}" class="nav-link px-2 link-dark">Recipes</router-link></li>
        <li><router-link to="/" class="nav-link px-2 link-dark">Browse</router-link></li>
        <li><router-link to="/" class="nav-link px-2 link-dark">Favorites</router-link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-dark me-2" v-if="!authenticated" @click="login">
          <router-link :to="{name: 'Auth'}" style="text-decoration: none;">Log in</router-link>
        </button> 
        <button type="button" class="btn btn-dark" v-if="!authenticated" @click="register">
          <router-link :to="{name: 'Register'}" style="text-decoration: none; color:#fff;">Sign Up</router-link>
        </button>
        <button type="button" class="btn btn-dark" v-if="authenticated" @click="logout">
          <router-link :to="{name: 'Auth'}" style="text-decoration: none; color:#fff;">Logout</router-link>
        </button>
      </div>

    </header>

  
  </div>

  <router-view/>
</template>

<script>
import router from './router';
import {APIService} from './http/APIService';
const apiService = new APIService();

export default {
  name: 'App',
  data: () => ({
    authenticated: false,
    dialog: false,
    menu: [
      { title: 'Home', url:"/"},
      { title: 'Category', url:"/category-list" },
    ]
  }),
  mounted() {
    /*apiService.getCategoryList().then(response => {
      this.authenticated = true;
    }).catch(error => {
      if (error.response.status === 401) {
        localStorage.removeItem('isAuthenticates');
        localStorage.removeItem('log_user');
        localStorage.removeItem('token');
        this.authenticated = false;
      }
    });
    console.log('this.authenticated--'+this.authenticated);*/
  },
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticates');
      localStorage.removeItem('log_user');
      localStorage.removeItem('token');
      this.authenticated = false;
      window.location = "/"
    },
    login() {
      router.push("/auth");
    },
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
@import "bootstrap-icons/font/bootstrap-icons.css";
#app {
  font-family: 'Lato', sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
}

.logo {
  font-family: 'Pacifico', cursive;
  font-size: 50px;
}

</style>
