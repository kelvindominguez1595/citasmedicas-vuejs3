<template>
  <div class="container">
    <div class="row mb-2 d-flex justify-content-center">
      <div class="col-xs-12 co-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card mb-4 border-primary">
          <div class="card-header bg-primary text-white d-flex justify-content-between">
            <div class="">Generos</div>
          </div>
          <div class="card-body ">
            <div class="alert alert-success" role="alert" v-show="showSuccess">
              Guardado correctamente!!! ππππππ
            </div>

            <div class="alert alert-danger" role="alert" v-show="showError">
              !Oops! Ah! ocurrido un error π­π­π­
              <br>
              <strong>{{errorMessage}}</strong>

              <ul >
                <li v-for="(errors, index) in errorsMessages" :key="index">{{errors.param}}: {{errors.msg}}</li>
              </ul>
            </div>

            <div class="text-center" v-show="isLoading">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label for="name" class="form-label">Nombre del genero</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre de la categorΓ­a" v-model="name">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <button class="btn btn-primary" @click="saveCategorie">Guardar</button>
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
  name: "GenerosEditFormView",
  data() {
    return {
      isLoading: false,
      name: '',
      showError: false,
      showSuccess: false,
      errorMessage: '',
      errorsMessages: [],
      uiditems: ""
    }
  },
  methods: {
    async saveCategorie () {
      let params = {
        name: this.name,
      };
      this.showError = false;
      this.showSuccess = false;
      this.isLoading = true;
      await this.axios.put(`/genders/${this.uiditems}`, params)
          .then(res => {
            this.showSuccess = true;
            this.$router.push("/generos");
          })
          .catch(err => {
            const {errors, message} = err.response.data;
            this.errorsMessages = errors;
            this.errorMessage = message;
            this.showError = true;
          })
      this.isLoading = false;
    },
    async getDataParams(uid){
      await this.axios.get(`/genders/generosid/${uid}`)
          .then(response =>  {
            const {genero} = response.data;
            const { name } = genero;
            this.name = name;
          });
    }
  },
  async mounted(){
    this.uiditems = this.$route.params.uid;
    this.getDataParams(this.$route.params.uid);
  },
}
</script>

<style scoped>

</style>