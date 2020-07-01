<template>
  <header class="header">
    <nav>
      <div class="nav-link">One</div>
      <div class="nav-link">Two</div>
      <div class="nav-link">Three</div>
      <div class="nav-link">Four</div>
    </nav>
    <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle>
  </header>
</template>

<script>
import Toggle from "@/components/Toggle.vue";
export default {
  props: ["mode"],
  components: {
    Toggle
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  height: 60px;
  align-items: center;
  background: #c3c3c3;
  transition: background 0.3s ease-out;
}

.header nav {
  display: flex;
  height: 60px;
}

.header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}

.dark header {
  background: #15202b;
}

.header nav .nav-link:hover {
  background: #b0b0b0;
}

.dark .header nav .nav-link:hover {
  background: #101520;
}
</style>
