<template>
  <div class="about">
    <h1>{{ title }}---{{ name }}</h1>
    <button @click="play">点击</button>
    <span>年龄：{{ age }}</span>
  </div>
</template>
<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  // data(){
  //   return{
  //     title:'hello name'
  //   }
  // },
  coms
  // methods:{
  //   play(){
  //     this.age+=2;
  //   }
  // },

  //vue3.0的数据初始化
  setup() {
    const state = reactive({
      title: "hello name",
      name: "马克",
      age: 10,
    });
    let play = () => {
      state.age += 2;
    };
    return {
      ...toRefs(state),
      play,
    };
  },
};
</script>
