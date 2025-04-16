// Pinia에서 스토어를 정의하는 핵심 함수 import
import { defineStore } from 'pinia'

// 'counter'라는 고유 ID를 가진 스토어 정의
// useCounterStore는 이 스토어를 사용할 수 있게 해주는 함수입니다.
// state, actions, getters는 각각 Vue의 data, methods, computed와 유사한 역할
export const useCounterStore = defineStore('counter', {

  // 📌 state: 스토어가 관리할 반응형 데이터 정의
  state: () => ({
    // count라는 상태 변수, 기본값은 0
    count: 0,
  }),

  // 📌 actions: state를 변경하는 로직 (메서드) 정의
  actions: {
    // count를 1 증가시키는 메서드
    increment() {
      // this는 현재 스토어 인스턴스를 가리킵니다.
      this.count++
    },
  },

  // 📌 getters: state로부터 계산된 값을 반환하는 속성
  getters: {
    // doubleCount: count의 2배 값을 반환하는 getter
    // state 매개변수는 현재 스토어의 state에 접근 가능하게 합니다.
    doubleCount: (state) => state.count * 2,
  },
})
