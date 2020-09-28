<template>
    <div>
        <h2>{{hellomsg}}</h2>
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
    setup(){
        const 
        const state = reactive({
hellomsg: inject('hellomsg')
        });
        return{
            ...state,
            hellomsg
        }
    }
}
</script>