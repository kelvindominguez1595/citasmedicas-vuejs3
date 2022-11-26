<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand" >Navbar</router-link>
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
              <li><a class="dropdown-item" href="#">Crear</a></li>
              <li><a class="dropdown-item" href="#">Ver reservaciones</a></li>
              <li><a class="dropdown-item" href="#">Ver Calendario</a></li>
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
              <li><a class="dropdown-item" href="#">Categorias</a></li>
              <li><a class="dropdown-item" href="#">Generos</a></li>
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