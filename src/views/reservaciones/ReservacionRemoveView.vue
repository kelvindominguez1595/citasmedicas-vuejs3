<template>
  <div class="container">
    <div class="row mb-2">
      <div class="col-xs-12 co-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="card mb-4 border-primary">
          <div class="card-header bg-primary text-white d-flex justify-content-between">
            <div class="">Reservaciones </div>
          </div>
          <div class="card-body text-center">
              <h1 class="fw-bold mb-3">¿Esta seguro de borrar el registro?</h1>
            <h5 class=" mb-3">Si presiona SI, ¡ACEPTO!, los registros se borraran permanente y no se podrán volver a recuperar.</h5>
            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <button class="btn btn-primary me-2" @click="backScreen">Volver</button>
              <button class="btn btn-danger" @click="removeReservations">SI, ¡ACEPTO!</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservacionRemoveView",
  data() {
    return {
      uiditems: ""
    }
  },
  methods: {
    async removeReservations () {
      await this.axios.delete(`/reservations/${this.uiditems}`)
          .then(res => {
            this.$router.push("/reservaciones");
          })
          .catch(err => {
            const {errors, message} = err.response.data;
          })
    },
    backScreen (){
      this.$router.push("/reservaciones");
    }
  },
  async mounted(){
    this.uiditems = this.$route.params.uid;
  },
}
</script>

<style scoped>

</style>