<template>
  <NavComponent v-show="$store.state.isAuthenticated" />
  <router-view/>
</template>

<style>
</style>
<script>
// @ is an alias to /src
import NavComponent from '@/components/NavComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent
  },
  computed: {
  }
}
</script>
