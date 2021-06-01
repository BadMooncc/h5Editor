export default function(fn) {
  let timer = '';
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn();
    }, 300);
  }
}