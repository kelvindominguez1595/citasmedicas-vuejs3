<template>
<div class="container">
  <div class="row mb-2">
    <div class="col-xs-12 co-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="card mb-4 border-primary">
        <div class="card-header bg-primary text-white d-flex justify-content-between">
          <div class="">Reservaciones </div>
        </div>
        <div class="card-body table-responsive">

          <div class="text-center" v-show="isLoading">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>


          <table class="table" v-show="!isLoading">
            <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Nota</th>
              <th scope="col">Mensaje</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Opciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="reservacion in reservaciones" v-bind:key="reservacion">
              <th scope="row">{{reservacion.title}}</th>
              <td>{{reservacion.note}}</td>
              <td>{{reservacion.message}}</td>
              <td>{{reservacion.date}}</td>
              <td>{{reservacion.time}}</td>
              <td>
                <router-link class="btn btn-primary me-2" :to="'/editreservacion/'+reservacion._id"> Editar</router-link>
                <router-link class="btn btn-danger me-2" :to="'/removereservacion/'+reservacion._id"> Borrar</router-link>
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
  name: "ReservacionView",
  data() {
    return {
      reservaciones:[],
      isLoading: false
    }
  },
  async mounted(){
    this.isLoading = true;
    await this.axios.get('/reservations')
        .then(response =>  {
          const {reservaciones} =response.data;
          this.reservaciones = reservaciones;
        });
    this.isLoading = false;
  }
}
</script>

<style scoped>

</style>