<template>
<div class="container-fluid">
  <div class="row mb-2">
    <div class="col-xs-12 co-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="card mb-4 border-primary">
        <div class="card-header bg-primary text-white d-flex justify-content-between">
          <div class="">Reservaciones </div>
        </div>
        <div class="card-body table-responsive">

          <FullCalendar :options="calendarOptions" />
        </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: "ReservacionCalendarView",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',

      }
    }
  },
  async mounted(){
    await this.axios.get('/reservations')
        .then(response =>  {
          const {reservaciones} = response.data;
          let eventsReservations = [];
          reservaciones.map(e => {
            eventsReservations.push({
              title: e.title,
              date: e.date
            })
          })
          this.calendarOptions.events = eventsReservations;
        });
  }
}
</script>

<style scoped>

</style>