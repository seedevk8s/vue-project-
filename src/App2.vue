<script setup>
const pop = (message) => {
  window.alert(message);
}

const run = () => {
  window.alert("God help me, please!")
}
</script>

<template>
  <button v-on:click="pop('안녕')"></button>
  <br>
  <button @click="pop('굿나잇')"></button>
  <br>
  <button @click="run">Run</button>
</template>