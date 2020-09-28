<template>
  <div>
    <h2>{{ hellomsg }}</h2>
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
        //这个root是setup的object对象中
      root.$http.get("url").then((res) => {}),
        (error) => {
          console.log(error);
        };
    };
    return {
      ...state,
    };
  },
};
</script>