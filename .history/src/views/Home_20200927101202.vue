<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { reactive } from "@vue/composition-api";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  // data(){
  //   return{
  //     title:'hello name'
  //   }
  // },
  setup() {
    const state = reactive({
      title: "hello name",
    });
    return state
  },
};
</script>
