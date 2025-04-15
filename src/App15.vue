<script setup>
// 커스텀 생성 훅
(async function onCreated() {  /*함수 이름 (호출 목적은 아님, 디버깅용 혹은 자기참조용)*/
  console.log(document.getElementById("message"))
})();
</script>

<template>
  <div id="message">Les!</div>
</template>