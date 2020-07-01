<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="changeMode"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$store.getters.getMode;
    }
  },
  methods: {
    changeMode() {
      this.$store.dispatch("toggle");
    }
  }
};
</script>

<style scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #15202b;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: rgb(194, 194, 194);
}

input:focus + toggler {
  box-shadow: 0 0 2px rgb(194, 194, 194);
}

input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.toggler.round {
  border-radius: 34px;
}

.toggler.round:before {
  border-radius: 50%;
}
</style>
