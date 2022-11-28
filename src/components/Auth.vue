<template>
<div class="vh-100">
  <div class="container py-2 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <!--Heading-->
                  <div class="mb-3 pb-1 text-center">
                    <h1 class="fw-bold mb-0">Log In</h1>
                    <div v-if="showMsg === 'error'" close-icon="mdi-close-circle" value="true" class="alert alert-danger" role="alert" dense>
                      Invalid username or password. Please Try again.
                    </div>
                    <div class="card-text pt-2">
                      <div class="row align-items-center justify-content-center" v-if="loading">
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Form input controls-->
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example17">Username</label>
                    <input
                      v-model="credentials.username"
                      :counter="70"
                      label="Username"
                      :rules="rules.username"
                      maxlength="70"
                      required
                      type="text"
                      class="form-control form-control-lg"
                      aria-describedby="inputGroupPrepend2"
                    />
                  </div>
                  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27">Password</label>
                    <input
                      :type="showPassword ? 'text' : 'Password'"
                      v-model="credentials.password"
                      label="Password"
                      :rules="rules.password"
                      maxlength="20"
                      required
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = ! showPassword"
                      class="form-control form-control-lg"
                      aria-describedby="inputGroupPrepend2"
                    />
                  </div>

                  <!--login button and forgot password link-->
                  <div class="d-grid gap-2 pt-1 text-center">
                    <router-link to="/" class="small text-muted text-center py-2 pb-3">Forgot Password</router-link>
                    <button class="btn btn-dark btn-lg btn-block" ref="form" @click.prevent="login">Login</button>
                    <p class="pb-lg-2 py-5">Don't have an account? <router-link :to="{name: 'Register'}" style="color: #393f81;">Sign Up here</router-link></p>
                  </div>
                  
        
                </form>
              
              </div>
            </div>

            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
              alt="login form" class="img-fluid" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
  
  
<script>
import router from '../router';
import {APIService} from '../http/APIService';
const apiService = new APIService();

export default {
  name: 'Auth',
  data: () => ({
    credentials: {},
    valid: true,
    showMsg: '',
    loading: false,
    rules: {
      username: [
        v => !!v || "Username is required",
        v => (v && v.length > 3) || "A username must be more than 3 characters long",
        v => /^[a-z0-9_]+$/.test(v) || "A username can only contain letters and digits"
      ],
      password: [
        v => !!v || "Password is required",
        v => (v && v.length > 7) || "The password must be longer than 7 characters"
      ]
    },
    showPassword: false,
  }),
  methods: {
    login() {
      // checking if the input is valid
      if (this.$refs.form) {
        this.loading = true;
        apiService.authenticateLogin(this.credentials).then((res)=>{
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('isAuthenticates', JSON.stringify(true));
          localStorage.setItem('log_user', JSON.stringify(this.credentials.username));
          window.location = "/"
        }).catch(e => {
          this.loading = false;
          localStorage.removeItem('isAuthenticates');
          localStorage.removeItem('log_user');
          localStorage.removeItem('token');
          this.showMsg = 'error';
        })
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3em;
}

</style>
  
