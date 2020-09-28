<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <!-- <h1>{{ num }}</h1> -->
    <!-- <button @click="play">点击</button> -->
    <!-- <span>年龄：{{ age }}</span> -->
  </div>
</template>
<script>
import {
  reactive,
  toRefs,
  computed,
  onMounted,
  provide,
} from "@vue/composition-api";
export default {
  //vue3.0的数据初始化
  setup() {
    const state = reactive({
      title: "hello name",
    });
    provide()//两个人参数，1.对应数据的名字；2.要
    // const autoPlay=()=>{
    //   setInterval(play,5000);
    // }
    const play = () => {
      alert("welcome");
    };
    onMounted(() => {
      // play()
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
