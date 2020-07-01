<template>
  <div id="app" class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle"></Header>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      mode: "light"
    };
  },
  components: {
    Header
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  color: #15202b;
  transition: background 0.3s ease-out;
}

.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>
