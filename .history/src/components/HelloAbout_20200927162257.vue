<template>
  <div>
    <h2>{{ hellomsg }}</h2>
    let showHide = () =>{
    <button @click=""></button>
    <h2>显隐展示</h2>
  </div>
</template>
<script>
import {
  reactive,
  toRefs,
  computed,
  onMounted,
  inject,
} from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const state = reactive({
      hellomsg: inject("hellomsg"),
    });
    let getData = () => {
      //这个root是setup的object对象中属性的值
      root.$http.get("url").then((res) => {}),
        (error) => {
          console.log(error);
        };
    };
    let showHide = () =>{
      root.$store.state.isNavShow = !root.$store.state.isNavShow
    };
    return {
      ...state,
      getData,
      showHide,
    };
  },
};
</script>