<script setup>
import {computed, reactive} from "vue";

// 반응형 상태
const state = reactive({
  mvpId: 12,
  players: [
    {id: 7, name: "추호진"},
    {id: 9, name: "임아영"},
    {id: 12, name: "리현주"}
  ]
})

//(컴퓨티드 선언)
const computedMvpName = computed(() => {
  if (state.mvpId) {
    const player = state.players.find(p => p.id === state.mvpId);
    if (player) {
      return player.name;
    }
  }
  return "없음";
})

console.log(computedMvpName.value)

const getMvpName = () => {

}

</script>

<template>
  <div>
    <h1>오늘의 MVP</h1>
    <div>
      {{ computedMvpName }}
    </div>
  </div>
</template>