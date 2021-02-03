<template>
  <div>
    <div id="box">
      <template v-for="(item, index) in elContainer" >
        <div
          :style="{'z-index': index}"
          v-focus.stop="index"
          :key="item"
          class="box-wrap">
          <span class="enlarge-btn enlarge-btn_lt"></span>
          <span class="enlarge-btn enlarge-btn_rt"></span>
          <span class="enlarge-btn enlarge-btn_lb"></span>
          <span class="enlarge-btn enlarge-btn_rb"></span>
          <div>asd</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      elContainer: [1]
    }
  },
  methods: {
    handleTensile() {
      console.log(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#box {
  width: 375px;
  height: 667px;
  margin: auto;
  background: red;
  position: relative;
  overflow: hidden;
}
.box-wrap {
  user-select:none;
  position: relative;
  border: 1px dashed #000;
  display: inline-block;
  padding: 20px;
  .enlarge-btn {
    width: 8px;
    border-radius: 4px;
    height: 8px;
    background:#333;
    position: absolute;
  }
  .enlarge-btn:hover {
    opacity: .8;
    transform: scale(1.4);
  }
  .enlarge-btn_lt {
    top: -4px;
    left: -4px;
  }
  .enlarge-btn_rt {
    top: -4px;
    right: -4px;
  }
  .enlarge-btn_lb {
    bottom: -4px;
    left: -4px;
  }
  .enlarge-btn_rb {
    bottom: -4px;
    right: -4px;
  }
}
.box-wrap > * {
  display: inline-block;
  vertical-align: middle;
}
</style>
