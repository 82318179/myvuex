<template>
  <div id="app">
    <div id="nav">
      哈哈{{newCount}}--
      {{this.$store.state.count}}
      <button @click="countAdd">修改1</button>
      <button @click="countAddN">修改2</button>
      <button @click="countAdd1">修改3</button>
      <button @click="countAdd2">修改4</button>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    countAdd() {
      this.$store.commit("addcount");
    },
    countAddN() {
      this.$store.commit("addncount", 100);
    },
    countAdd1() {
      this.$store.dispatch("addncount1", 100);
    },
    countAdd2() {
      this.$store.dispatch("getAsync", 100);
    }
  },
  computed: {
    newCount() {
      return this.$store.getters.newCount;
    }
  }
};
</script>

<style>
</style>
