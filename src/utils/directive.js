class Drag {
  constructor(el) {
    this.x = 0;
    this.y = 0;
    this.l = 0;
    this.t = 0;
    this.isDown = false;
    this.el = el;
    this.zIndex = '';
  }
  stopMove() {
    this.isDown = false;
    this.el.style.cursor = 'default';
  }
  init() {
    let el = this.el;
    el.style.position = 'absolute';
    el.onmousedown = (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
      //获取左部和顶部的偏移量
      this.l = el.offsetLeft;
      this.t = el.offsetTop;
      this.isDown = true;
      // 记录元素初始zindex
      this.zIndex = el.style.zIndex;
      el.style.zIndex = '1001';
    }
    el.onmouseout = el.onmouseup = () => {
      // 还原元素初始z-index
      el.style.zIndex = +this.zIndex >= 1001 ? '100' : this.zIndex;
      //开关关闭
      this.stopMove()
    }
    el.onmousemove = (e) => {
      if (this.isDown == false) {
        return;
      }
      //获取x和y
      let nx = e.clientX;
      let ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      let nl = nx - this.x + this.l;
      let nt = ny - this.y + this.t;
      el.style.left = nl + 'px';
      el.style.top = nt + 'px';
    }
  }
}
export function drag(Vue) {
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    bind: function (el) {
      let drag = new Drag(el);
      drag.init();
    }
  })
}
