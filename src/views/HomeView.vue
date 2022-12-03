<template>
  <div class="container ">
    <div class="row d-flex justify-content-center">
      <img class="img-fluid" alt="ULS logo" src="../assets/logo.jpg" style="width: 300px; height: 130px">
    </div>
    <div class="row">
      <HelloWorld msg=""/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      categories: [],
    }
  },
  async mounted(){
    await this.axios.get("/categories")
        .then((res) => {
          const {categories} = res.data;
          console.log(res.data)
          this.categories = categories;
        })
        .catch((err) => console.log(err));
  },
  components: {
    HelloWorld
  },
  }
</script>
