<script setup>
const message = "There";
const message2 = {name: "Chu", age: 20};
const page = "history"

let loading = true;
let loading2 = false;

const parent = "fruits"
const child = "item"

const fruits = "apple avocado"
const fruitArr = ["banana", "blueberry"]

const visible = {fruit: true}
const hidden = {fruit: false}

const rect = "background:red;width:200px;height:100px"
const rect2 = {
  background: "blue",
  width: "200px",
  height: "200px"
}

let loading3 = true

const fruits2 = ["apple", "banana", "pear"]
</script>

<template>
  <div>Hello {{ message }}</div><br>
  <div>
    <span>Hello </span>
    <span v-text="message"></span><br>
    <span v-text="message2"></span><br>
    <span v-text="JSON.stringify(message2)"></span>
  </div>
  <div v-bind:id="page">HISTORY PAGE</div>
  <div :id="page">HISTORY PAGE2</div>
  <br>

  <input type="text" placeholder="아이디" :readonly="loading">
  <input type="password" placeholder="패스워드" :readonly="loading">
  <button :disabled="loading">로그인</button><br>

  <input type="text" placeholder="아이디" :readonly="loading2">
  <input type="password" placeholder="패스워드" :readonly="loading2">
  <button :disabled="loading2">로그인</button><br><br>

  <ul :class="parent">
    <li :class="child">사과</li>
    <li :class="child">바나나</li>
    <li :class="child">딸기</li>
    <li :class="child">배</li>
  </ul>
  <br>

  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr">바나나 / 블루베리</div>
  <div :title="fruitArr">바나나 / 블루베리</div>
  <br>

  <div :class="visible">사과</div>
  <div :class="hidden">오이</div>
  <div :class="{fruit: true}">배</div>
  <br>

  <div :style="rect"></div>
  <div :style="rect2"></div>
  <br>

  <div v-if="loading3">로딩 중</div>
  <div v-else>로딩 완료</div>
  <br>

  <template v-if="loading3">로딩 중</template>
  <template v-else>로딩 완료</template>
  <br>

  <template>
    <div v-show="loading3">로딩 중</div>
    <div v-show="!loading3">로딩 완료</div>
  </template>

  <template v-show="true">로딩 중2</template>

  <div v-for="f in fruits2">{{ f }}</div>
  <br>

  <div v-for="(f, idx) in fruits2">{{ idx }} {{ f }}</div>

  <template v-for="f in fruits2"> {{ f }} </template>
</template>















