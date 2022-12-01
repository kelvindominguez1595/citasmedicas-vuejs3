<template>
  <nav class="navbar navbar-expand-lg bg-light mb-3">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand" >{{$store.state.isUser.name}} {{$store.state.isUser.lastname}}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link active" aria-current="page" href="#">Home</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/about" class="nav-link">Reservacion</router-link>
          </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Reservaciones
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/crearreservacion">Crear</router-link></li>
              <li><router-link class="dropdown-item" to="/reservaciones">Ver reservaciones</router-link></li>
              <li><router-link class="dropdown-item" to="/calendarreservations">Ver Calendario</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Perfil
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Ver</a></li>
              <li><a class="dropdown-item" href="#">Cambiar contraseña</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Configuraciones
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/categorias">Categorias</router-link></li>
              <li><router-link class="dropdown-item" to="/generos">Generos</router-link></li>
              <li><a class="dropdown-item" href="#">Estado Pago</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#" @click="$store.commit('logout')">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>