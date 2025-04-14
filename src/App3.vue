<script setup>
let pushUp = 0;
let sitUp = 0;

const incresePushUp = () => {
  pushUp++;
  console.log(`Push Up: ${pushUp}`);
}

const increseSitUp = () => {
  sitUp++;
  console.log(`SitUp: ${sitUp}`);
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