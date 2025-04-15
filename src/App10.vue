<script setup>
import {reactive} from "vue";

// 반응형 상태
const state = reactive({
  players: "Chu"
})

</script>

<template>
  <div>
    <h1>{{ state.players }}</h1>
    <input type="text" :value="state.players" />
  </div>
</template>