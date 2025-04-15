<script setup>
import {reactive} from "vue";

// 반응형 상태
const state = reactive({
  mvpId: 9,
  players: [
    {id: 7, name: "추호진"},
    {id: 9, name: "임아영"},
    {id: 12, name: "리현주"}
  ]
})

//(메서드 선언)
const getMvpName = () => {
  if (state.mvpId) {
    const player = state.players.find(p => p.id === state.mvpId);
    if (player) {
      return player.name;
    }
  }
  return "없음";
}

</script>

<template>
  <div>
    <h1>오늘의 MVP</h1>
    <div>
      {{ getMvpName() }}
    </div>
  </div>
</template>