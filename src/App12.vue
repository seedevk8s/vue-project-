<script setup>
import {reactive} from "vue";

// 반응형 상태
const state = reactive({
  form: {
    id: "",
    pw: ""
  }
})

// 로그인 메서드
const login = () => {

  window.alert(state.form.id + "님 환영합니다!");
}

</script>

<template>
  <!-- 제출(submit) 시 login 메서드 호출(새로고침을 막기 위한 prevent) -->
  <form @submit.prevent="login"> <!--이 폼이 제출될 때 브라우저가 새로고침하지 않도록 하고, 대신 login() 함수를 실행해라!-->
    <!-- v-model을 활용한 양방향 데이터 바인딩 -->
    <input type="text" v-model="state.form.id" placeholder="아이디">
    <input type="password" v-model="state.form.pw" placeholder="패스워드"></input>

    <!-- 제출을 위한 버튼 -->
    <button type="submit">로그인</button>
  </form>
</template>