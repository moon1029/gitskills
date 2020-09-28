<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <!-- <h1>{{ num }}</h1> -->
    <!-- <button @click="play">点击</button> -->
    <!-- <span>年龄：{{ age }}</span> -->
  </div>
</template>
<script>
import { reactive, toRefs, computed, onMounted } from "@vue/composition-api";
export default {
  // data(){
  //   return{
  //     title:'hello name'
  //   }
  // },
  // computed:{
  //   num(){
  //     return 100;
  //   }
  // },
  // methods:{
  //   play(){
  //     this.age+=2;
  //   }
  // },

  //vue3.0的数据初始化
  setup() {
    const state = reactive({
      title: "hello name",
    });
    const auto
    const play = () => {
      alert("welcome")
    };
    onMounted(()=>{
      play()
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
