<script setup>
import {onUpdated, reactive} from "vue";

// 반응형 상태
const state = reactive({
  message: "God bless you"
})

onUpdated(() => {
  console.log(document.getElementById('btn').innerText)
})

</script>

<template>
  <button id="btn" @click="state.message='My Load!'">{{ state.message }}</button>
</template>