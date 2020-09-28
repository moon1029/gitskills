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
  onUnmounted,
  toRefs
} from '@vue/composition-api'
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup(props,{root}){
    const state = reactive({

    });
    onMounted(()=>{ //挂载完成
      root.$store.dispatch('HIDENAV')
    });
    onUnmounted(()=>{ 
      root.$store.dispatch('SHOWNAV')
    });
    return{
      ...toRefs(state),
    }
  }
};
</script>
