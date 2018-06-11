<template>
  <div class="child childB">
    <h1> Result: {{ result }} </h1>
    <button @click="changeResult()">Change Result</button>
  </div>
</template>

<script>

export default {
  computed: {
    result () {
      return this.$store.getters.result
    }
  },
  methods: {
    changeResult () {
      this.$store.dispatch('increaseResult', 3000);
    }
  }
};

</script>

<style scoped>
  .child {
    width: 150px;
    height: 150px;
    position:absolute;
    top: 60px;
    padding: 0px 5px 5px;
  }
  .childB {
    background-color: blue;
    left: 190px;
  }
</style>
