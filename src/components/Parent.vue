<template>
  <div id="parent">
    <ChildA/>
    <ChildB/>
  </div>
</template>

<script>

import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default {
components: {ChildA, ChildB}
};

</script>

<style scoped>
  #parent {
    background-color: green;
    width: 400px;
    height: 300px;
    position: relative;
    padding-left: 5px;
  }
</style>
