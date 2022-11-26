<template>
<div class="row mt-3 d-flex justify-content-center">
  <div class="col-3 col-md-3 col-lg-3 col-xl-3">
    <div class="card">
      <div class="card-header bg-primary text-white">
        Inicio de Sesión
      </div>
      <div class="card-body">
        <form type="post"  class="row g-3" @submit.prevent="loginUser">
          <div class="col-12">
            <label>Correo electronico</label>
            <input type="text" class="form-control" placeholder="email" v-model="email" required />
          </div>
          <div class="col-12">
            <label>Contraseña:</label>
            <input type="password" class="form-control" placeholder="contraseña" v-model="password" required />
          </div>

          <div class="col text-center">
            <div  v-show="loading" class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <button v-show="!loading" type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import store from "@/storage";

export default {
  name: "LoginView",
  data(){
    return {
      email:'',
      password: '',
      loading: false
    }
  },
  methods: {
    async loginUser () {
      let params = {
        email: this.email,
        password: this.password
      }
      this.loading = true;
      await this.axios.post('/auth/login', params)
        .then((res) => {
          const {token, user, message} = res.data
          localStorage.setItem('token', token);
          this.$store.commit('setIsAuthenticated', true);
          this.$store.commit('setUserData', user);

          this.$router.push("/home");
          this.loading = false;
        })
        .catch((err) => {
          //const {message} = err.response.data;
         console.log(err)
           this.loading = false;
        });

    }
  }
}
</script>

<style scoped>

</style>