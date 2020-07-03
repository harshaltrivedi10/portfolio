<template>
  <header class="header">
    <nav class="navbar">
      <router-link class="nav-link" to="/" tag="div">
        <strong>Harshal Trivedi</strong>
      </router-link>
      <router-link class="nav-link" to="/blogs" tag="div">
        Blogs
      </router-link>
      <router-link class="nav-link" to="/projects" tag="div">
        Projects
      </router-link>
    </nav>
    <Toggle></Toggle>
  </header>
</template>

<script>
import Toggle from "@/components/Toggle.vue";
export default {
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
  cursor: pointer;
}

.dark .header nav .nav-link:hover {
  background: #464d5c;
}

.header .navbar {
  height: 100%;
}
</style>
