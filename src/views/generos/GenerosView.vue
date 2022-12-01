<template>
<div class="container">
  <div class="row mb-2 d-flex justify-content-center">
    <div class="col-xs-12 co-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div class="card mb-4 border-primary">
        <div class="card-header bg-primary text-white d-flex justify-content-between">
          <div class="">Generos</div>
        </div>
        <div class="card-body table-responsive">
          <router-link class="btn btn-primary me-2" to="/creategeneros">Nueva Genero</router-link>
          <div class="text-center" v-show="isLoading">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>


          <table class="table" v-show="!isLoading">
            <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Opciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="gender in genders" v-bind:key="gender">
              <th scope="row">{{gender.name}}</th>
              <td>
                <router-link class="btn btn-primary me-2" :to="'/editgeneros/'+gender._id"> Editar</router-link>
                <router-link class="btn btn-danger me-2" :to="'/removegeneros/'+gender._id"> Borrar</router-link>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "GenerosView",
  data() {
    return {
      genders:[],
      isLoading: false
    }
  },
  async mounted(){
    this.isLoading = true;
    await this.axios.get('/genders')
        .then(response =>  {
          const {generos} =response.data;
          this.genders = generos;
        });
    this.isLoading = false;
  }
}
</script>

<style scoped>

</style>