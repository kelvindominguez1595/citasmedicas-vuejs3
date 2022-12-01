<template>
<div class="container">
  <div class="row mb-2 d-flex justify-content-center">
    <div class="col-xs-12 co-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div class="card mb-4 border-primary">
        <div class="card-header bg-primary text-white d-flex justify-content-between">
          <div class="">Categorías</div>
        </div>
        <div class="card-body table-responsive">
          <router-link class="btn btn-primary me-2" to="/createcategoria">Nueva Categoría</router-link>
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
            <tr v-for="categorie in categories" v-bind:key="categorie">
              <th scope="row">{{categorie.name}}</th>
              <td>
                <router-link class="btn btn-primary me-2" :to="'/editcategoria/'+categorie._id"> Editar</router-link>
                <router-link class="btn btn-danger me-2" :to="'/removecategoria/'+categorie._id"> Borrar</router-link>
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
  name: "CategoriasView",
  data() {
    return {
      categories:[],
      isLoading: false
    }
  },
  async mounted(){
    this.isLoading = true;
    await this.axios.get('/categories')
        .then(response =>  {
          const {categories} =response.data;
          this.categories = categories;
        });
    this.isLoading = false;
  }
}
</script>

<style scoped>

</style>