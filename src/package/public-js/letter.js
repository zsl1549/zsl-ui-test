// package/public-js/letter.js
// 处理首字母大小
export function handleFirstUpperCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
