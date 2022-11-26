<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{$store.state.isAuthenticated}}
    {{$store.state.isUser.name}}
{{categories}}
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
