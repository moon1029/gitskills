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
} from '@vue/composition-api';
import {get,post} from '../../utils/http'
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted(){
    this.getCount();
  },
  methods:{
    getCount(){
      get(this.api.getcount)
    }
  },
  setup(props,{root}){
    const state = reactive({

    });
    onMounted(()=>{ //挂载完成
      root.$store.dispatch('HIDENAV');
      console.group(root);
      console.log('请求接口');
      console.groupEnd();
    });
    onUnmounted(()=>{ //销毁
      root.$store.dispatch('SHOWNAV')
    });
    return{
      ...toRefs(state),
    }
  }
};
</script>
