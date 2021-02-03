const enumsDirection = {
  
}
class Drag {
  constructor(params) {
    this.x = 0;
    this.y = 0;
    this.elLeft = 0;
    this.elTop = 0;
    this.direction = ''; // 拖拽方向
    this.boxOffsetLeft = params.boxOffsetLeft;
    this.boxOffsetTop = params.boxOffsetTop;
    this.elWidth = 0;
    this.elHeight = 0;
    this.isDown = false;
    this.el = params.el;
    this.zIndex = params.index;
  }
  stopMove() {
    this.isDown = false;
  }
  directionFn(e) {
    this.x = e.clientX;
    this.y = e.clientY;
    //获取左部和顶部的偏移量
    this.elLeft = this.el.offsetLeft;
    this.elTop = this.el.offsetTop;
    this.el.style.zIndex = this.index;
    // 左侧拉伸
    if (this.x < this.boxOffsetLeft + this.elLeft + 10) return 'left';
    // 右侧拉伸
    if(this.x > this.boxOffsetLeft + this.elLeft + this.elWidth - 10) return 'right';
    // 顶部拉伸
    if(this.y < this.boxOffsetTop + this.elTop + 10) return 'top';
    // 底部拉伸
    if(this.y > this.boxOffsetTop + this.elTop + this.elHeight - 10) return 'bottom';
    // 拖拽
    return 'drag';
    
  }
  init() {
    // let el = this.el;
    this.el.style.position = 'absolute';
    this.el.onmousedown = (e) => {
      this.isDown = true;
      this.elWidth = this.el.offsetWidth;
      this.elHeight = this.el.offsetHeight;
      this.direction = this.directionFn(e);
      console.log(this.direction);
    }
    window.onmouseup = () => {
      // 还原元素初始z-index
      this.el.style.zIndex = this.zIndex;
      //开关关闭
      this.stopMove();
    }
    document.onmousemove = (e) => {
      if (!this.isDown) return;
      //获取x和y
      let nx = e.clientX;
      let ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      if(this.direction === 'drag') {
        let nl = nx - this.x + this.elLeft;
        let nt = ny - this.y + this.elTop;
        this.el.style.left = nl + 'px';
        this.el.style.top = nt + 'px';
        return;
      }
      //- 40 为去除padding的宽度
      if (this.direction === 'right') {
        this.el.style.width = this.elWidth + nx - this.x - 42 + 'px';
        return;
      }
      if (this.direction === 'left') {
        this.el.style.width = (this.elWidth - 42) + this.x - nx + 'px';
        this.el.style.left = this.elLeft - (this.x - nx) + 'px';
        return;
      }
      if (this.direction === 'top') {
        this.el.style.height = (this.elHeight - 42) + this.y - ny + 'px';
        this.el.style.top = this.elTop - (this.y - ny) + 'px';
        return;
      }
      if (this.direction === 'bottom') {
        this.el.style.height = this.elHeight + ny - this.y - 42 + 'px';
        return;
      }
    }
  }
}
export default {
  install(Vue) {
    Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted(el, binding) {
        let elBox = document.querySelector('#box');
        let drag = new Drag({
          el,
          index: binding.value,
          boxOffsetLeft: elBox.offsetLeft,
          boxOffsetTop: elBox.offsetTop
        });
        drag.init();
      }
    })
  }
}
