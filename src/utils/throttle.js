export default function(fn) {
  let start = 0;
  let timer = '';
  return function() {
    clearTimeout(timer);
    (fn && start < 2) && fn();
    start ++;
    timer = setTimeout(() => {
      start = 0;
    }, 5 * 1000);
  }
}