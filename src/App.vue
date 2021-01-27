<template>
  <div id="app">
      <Navbar />
    <transition name="slide-fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
}
</script>


<style  lang="scss">

@import './assets/scss/main.scss';
</style>
