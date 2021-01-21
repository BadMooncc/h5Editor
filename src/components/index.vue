<template>
  <div>
    <div id="box">
      asdasd
      <template v-for="(item, index) in 40" >
        <div :style="{'z-index': index}" v-focus.stop :key="item" class="box-wrap">
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
}
</style>
