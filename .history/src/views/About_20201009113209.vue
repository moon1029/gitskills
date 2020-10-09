<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <!-- <h1>{{ num }}</h1> -->
    <!-- <button @click="play">点击</button> -->
    <!-- <span>年龄：{{ age }}</span> -->
    <HelloAbout/>
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
import HelloAbout from '../components/HelloAbout'
export default {
  components:{
    HelloAbout
  },
  //vue3.0的数据初始化
  setup() {
    const state = reactive({
      title: "hello name",
      hellomsg:"打招呼"
    });
    provide('hellomsg',state.hellomsg)//两个参数：1.对应数据的名字；2.要传的值
    // const autoPlay=()=>{
    //   setInterval(play,5000);
    // }
    const play = () => {
      alert("welcome");
    };
    const login = () =>{
      root.$http.get(root.$api.login)
    }
    onMounted(() => {
      // play()
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
