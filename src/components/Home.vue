<template>
<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-12 col-sm-8 col-lg-6">
        <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80" class="d-block mx-lg-auto img-fluid" alt="Food Hero" width="900" height="700" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Enjoy Cooking</h1>
        <p class="lead py-5">Look no further. Browse through over 1,000 tasty recipes</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a @click="viewRecipes" class="btn btn-dark btn-lg px-4 me-md-2">View Recipes</a>
        </div>
      </div>

    </div>


  </div>
  </template>
  
  
  <script>
  import router from '../router'
  import axios from 'axios';
  import recipes from '../recipes.json';
  
  /*const url = "https://api.spoonacular.com/recipes/random?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeNutrition=true&number=100";
  */

  export default {
    name: 'Home',
    /*data: () => ({
      validUserName: "Guest",
      recipes: []
      
    }),*/
    data () {
      return {
        recipeList: recipes
      }
    },
    mounted() {
      this.getUser()
    },
     

    methods: {
      /*async getData() {
        const res = await fetch("https://api.spoonacular.com/recipes/random?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeNutrition=true&number=6");
        const finalRes = await res.json();
        this.list = finalRes;
      },*/
      viewRecipes() {
        router.push('/recipes-list');
      },
      getUser() {
        if (localStorage.getItem("isAuthenticates")
        && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
          this.validUserName = JSON.parse(localStorage.getItem("log_user"));
        }
      }

    }

      


    }
  
  
  </script>
  