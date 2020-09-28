<template>
  <div class="about">
    <h1>{{ title }}---{{name}}</h1>
    <button @click="play">点击</button>
  </div>
</template>
<script>
import { reactive } from "@vue/composition-api";
export default {
  // data(){
  //   return{
  //     title:'hello name'
  //   }
  // },

  // methods:{
  //   play(){
  //     alert('11111');
  //   }
  // },

  //vue3.0的数据初始化
  setup() {
    const state = reactive({
      title: "hello name",
      name:"马克",
      age:"年龄"
    });
    return {
      ...state
    }
  },
};
</script>
