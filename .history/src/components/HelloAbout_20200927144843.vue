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
        const hellomsg = inject('hellomsg');
        const state = reactive({
        })
    }
}
</script>