<template>
  <div class="hello text-center">
    <h1 class="fw-bold">Sistema de Citas Medicas</h1>
    <ul class="list-group list-group-flush">
      <li class="fs-3 fw-bold">Node JS</li>
      <li class="fs-3 fw-bold">MongoDB</li>
      <li class="fs-3 fw-bold">Vue JS 3</li>
      <li class="fs-3 fw-bold">Bootstrap 5.2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
