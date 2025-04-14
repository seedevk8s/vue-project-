<script setup>
import {nextTick, reactive} from "vue";

const state = reactive({
  pushUp: 0,
  sitUp: 0
})

const incresePushUp = () => {
  state.pushUp++;

  nextTick(() => {
    console.log(`Push Up: ${state.pushUp}`);
    console.log(document.getElementById("pushUp").innerText);
  })

}

const increseSitUp = () => {
  state.sitUp++;
  console.log(`SitUp: ${state.sitUp}`);
}

</script>

<template>
  <div>
    <h1>체력 검사</h1>
    <br/>
    <hr/>

    <ul>
      <li id="pushUp">팔 굽혀 펴기 : {{ state.pushUp }}</li>
      <li id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</li>
    </ul>
    <hr/>
    <br/>

    <button @click="incresePushUp()">팔 굽혀 펴기 증가</button>
    <button @click="increseSitUp()">윗몸 일으키기 증가</button>
  </div>
</template>