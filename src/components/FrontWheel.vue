<script setup>
import Tire from "@/components/Tire.vue";
import {useCounterStore} from "@/stores/counter.js"

const counterStore = useCounterStore()

</script>

<template>
  <div class="frontWheel">
    <span>FRONT WHEEL</span>
    <Tire color="BLUE"/>
    <div>TIMES: {{ counterStore.count }}</div>
  </div>
</template>

<style scoped>
.frontWheel {
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>