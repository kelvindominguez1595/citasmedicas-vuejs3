<template>
  <div class="container">
    <div class="row mb-2">
      <div class="col-xs-12 co-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="card mb-4 border-primary">
          <div class="card-header bg-primary text-white d-flex justify-content-between">
            <div class="">Reservaciones </div>
          </div>
          <div class="card-body ">
            <div class="alert alert-success" role="alert" v-show="showSuccess">
              Guardado correctamente!!! 😊😊😊😊😊😊
            </div>

            <div class="alert alert-danger" role="alert" v-show="showError">
             !Oops! Ah! ocurrido un error 😭😭😭
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
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <label for="formGroupExampleInput" class="form-label">Pacientes</label>
                <select class="form-select" v-model="uidpatients" >
                  <option  value="" disabled hidden>Seleccione</option>
                  <option v-for="(patient, index) in patients" :value="patient._id" :key="index">{{patient.name}} {{patient.lastname}}</option>
                </select>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <label for="formGroupExampleInput" class="form-label">Doctores</label>
                <select class="form-select" v-model="uiddoctor" >
                  <option  value="" disabled hidden>Seleccione</option>
                  <option v-for="(doctor, index) in doctors" :value="doctor._id" :key="index">{{doctor.name}} {{doctor.lastname}}</option>
                </select>
              </div>

            </div>


            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label for="title" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="titulo" v-model="title">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label for="title" class="form-label">Nota</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="nota" v-model="nota">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label for="title" class="form-label">Message</label>
                <textarea class="form-control" v-model="message"></textarea>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <label for="date" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="date" name="date" placeholder="titulo" v-model="date">
              </div>
              <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <label for="date" class="form-label">Hora</label>
                <select class="form-select" v-model="hour" >
                  <option  value="" disabled hidden>Seleccione</option>
                  <option v-for="(hour, index) in hours" :value="hour" :key="index">{{hour}} </option>
                </select>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <label for="date" class="form-label">Estado de Pago</label>
                <select class="form-select" v-model="status" >
                  <option  value="" disabled hidden>Seleccione</option>
                  <option v-for="(payment, index) in payments" :value="payment._id" :key="index" :selected="payment.name === `63520f975c4cbd8402df6d8f`">{{payment.name}} </option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <button class="btn btn-primary" @click="saveReservations">Agendar</button>
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
  name: "ReservacionFormView",
  data() {
    return {
      doctors:[],
      payments:[],
      patients:[],
      hours:[],
      isLoading: false,
      uidpatients: '',
      uiddoctor: '',
      title: '',
      nota: '',
      message: '',
      date: '',
      hour: '',
      status: '',
      showError: false,
      showSuccess: false,
      errorMessage: '',
      errorsMessages: []
    }
  },
  async mounted(){
    this.isLoading = true;
    await this.axios.get('/users/pacientes/PATIENT')
        .then(response =>  {
          const {usuario} =response.data;
          this.patients = usuario;
        });
    await this.axios.get('/users/pacientes/DOCTOR')
        .then(response =>  {
          const {usuario} =response.data;
          this.doctors = usuario;
        });
    await this.axios.get('/payments')
        .then(response =>  {
          const {payments} =response.data;
          this.payments = payments;
        });
    await this.axios.get('/reservations/horadeconsultas')
        .then(response =>  {
          const {horas} =response.data;
          this.hours = horas;
        });
    this.isLoading = false;
  },
  methods: {
    async saveReservations () {
      let params = {
        title: this.title,
        note: this.nota,
        message: this.message,
        date: this.date,
        time:this.hour,
        user: this.uiddoctor,
        paciente: this.uidpatients,
        medicaments: "",
        price: 0,
        payment: this.status
      };
      this.showError = false;
      this.showSuccess = false;
      this.isLoading = true;
      await this.axios.post('/reservations', params)
          .then(res => {
            this.showSuccess = true;
            this.title = "";
            this.nota = "";
            this.message = "";
            this.date = "";
            this.hour = "";
            this.uiddoctor = "";
            this.uidpatients = "";
            this.status = "";
          })
          .catch(err => {
            const {errors, message} = err.response.data;
            this.errorsMessages = errors;
            this.errorMessage = message;
            this.showError = true;
          })
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>

</style>