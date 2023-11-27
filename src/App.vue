<!-- src/App.vue -->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <zsl-button />
  <p>字母:{{ msg }}</p>
  <p>
    首字母大写：<span>{{ handleFirstUpperCase(msg) }}</span>
  </p>
  <p>数字{{ nums }}</p>
  <p>
    四舍五入：<span>{{ handleRoundOff(nums) }}</span>
  </p>
</template>

<script>
import { getCurrentInstance, ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const msg = ref("setup script");
    const nums = ref(17.6);
    const handleFirstUpperCase = proxy.public.handleFirstUpperCase;
    const handleRoundOff = proxy.public.handleRoundOff;
    return { msg, nums, handleFirstUpperCase, handleRoundOff };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  margin: 40px 0;
}
span {
  color: #1677ff;
}
</style>
