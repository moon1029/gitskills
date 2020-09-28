<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {
  reactive,
  onMounted,
  
}
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup(props,{root}){
    const state = ({

    });
    onMounted(()=>{
      root.$store.dispatch('HIDENAV')
    });
    onUnmounted(()=>{
      root.$store.dispatch('SHOWNAV')
    })
  }
};
</script>
