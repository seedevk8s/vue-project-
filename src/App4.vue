<script setup>
import {ref} from "vue";

const pushUp = ref(0);
const sitUp = ref(0);

const incresePushUp = () => {
  pushUp.value++;
  console.log(`Push Up: ${pushUp.value}`);
}

const increseSitUp = () => {
  sitUp.value++;
  console.log(`SitUp: ${sitUp.value}`);
}

</script>

<template>
  <div>
    <h1>체력 검사</h1>
    <br/>
    <hr/>

    <ul>
      <li id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</li>
      <li id="sitUp">윗몸 일으키기 : {{ sitUp }}</li>
    </ul>
    <hr/>
    <br/>

    <button @click="incresePushUp()">팔 굽혀 펴기 증가</button>
    <button @click="increseSitUp()">윗몸 일으키기 증가</button>
  </div>
</template>