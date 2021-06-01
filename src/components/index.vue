<template>
  <div>
    <div id="box">
      <!-- <div style="height: 100px;width: 100px;" v-drag.stop="2">1111</div> -->
      <template v-for="(item, index) in elContainer" >
        <div
          :style="{'z-index': index}"
          v-focus.stop="index"
          :key="index"
          class="box-wrap">
          <span class="enlarge-btn enlarge-btn_lt"></span>
          <span class="enlarge-btn enlarge-btn_rt"></span>
          <span class="enlarge-btn enlarge-btn_lb"></span>
          <span class="enlarge-btn enlarge-btn_rb"></span>
          <span class="enlarge-btn enlarge-btn_l"></span>
          <span class="enlarge-btn enlarge-btn_r"></span>
          <span class="enlarge-btn enlarge-btn_t"></span>
          <span class="enlarge-btn enlarge-btn_b"></span>
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
      elContainer: [1, 2  ]
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
.box-wrap:hover {
  cursor: move;
}
.box-wrap {
  user-select:none;
  position: relative;
  border: 1px dashed #000;
  display: inline-block;
  padding: 20px;
  .enlarge-btn {
    width: 10px;
    border-radius: 5px;
    height: 10px;
    background:#333;
    position: absolute;
  }
  .enlarge-btn:hover {
    opacity: .5;
    // transform: scale(1);
  }
  .enlarge-btn_l {
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .enlarge-btn_l:hover {
    cursor: w-resize;
  }
  .enlarge-btn_r {
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .enlarge-btn_r:hover {
    cursor: e-resize;
  }
  .enlarge-btn_t {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .enlarge-btn_t:hover {
    cursor: n-resize;
  }
  .enlarge-btn_b {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .enlarge-btn_b:hover {
    cursor: s-resize;
  }
  .enlarge-btn_lt {
    top: -5px;
    left: -5px;
  }
  .enlarge-btn_lt:hover {
    cursor: nw-resize;
  }
  .enlarge-btn_rt {
    top: -5px;
    right: -5px;
  }
  .enlarge-btn_rt:hover {
    cursor: ne-resize;
  }
  .enlarge-btn_lb {
    bottom: -5px;
    left: -5px;
  }
  .enlarge-btn_lb:hover {
    cursor: sw-resize;
  }
  .enlarge-btn_rb {
    bottom: -5px;
    right: -5px;
  }
  .enlarge-btn_rb:hover {
    cursor: se-resize;
  }
}
.box-wrap > * {
  display: inline-block;
  vertical-align: middle;
}
</style>
