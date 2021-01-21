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
          <button>asd</button>
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
    handleClick() {
      
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
  padding: 20px;
  user-select:none;
  position: relative;
  border: 1px dashed #000;
  display: inline-block;
  .enlarge-btn {
    width: 10px;
    border-radius: 5px;
    height: 10px;
    background: #000;
    position: absolute;
  }
  .enlarge-btn_lt {
    top: 0;
    left: 0;
  }
  .enlarge-btn_rt {
    top: 0;
    right: 0;
  }
  .enlarge-btn_lb {
    bottom: 0;
    left: 0;
  }
  .enlarge-btn_rb {
    bottom: 0;
    right: 0;
  }
}
</style>
