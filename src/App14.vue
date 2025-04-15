<script setup>
// 커스텀 생성 훅 (비동기 함수 하나를 정의하고 즉시 실행하는 구조)
(async function onCreated() {  /*함수 이름 (호출 목적은 아님, 디버깅용 혹은 자기참조용)*/
  const hook = "onUpdated"
  console.log(hook)
})();   /*() → 정의하자마자 즉시 실행 (즉시 실행 함수, IIFE-Immediately Invoked Function Expression)*/
</script>