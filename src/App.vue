<template>
  <div id="app">
    <Preloader v-if="loading" />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Preloader from './components/Preloader.vue';

export default {
  name: 'App',
  components: {
    Preloader,
  },
  setup(){
    const loading = ref(true);

    onMounted(() => {
      // imulate a loading delay
      setTimeout(() => {
        loading.value = false;
      }, 2000); // Adjust the delay as nedded
    });

    return {
      loading
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>