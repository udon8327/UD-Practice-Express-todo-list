/**
 * 取得範圍內隨機整數
 * @param {Number} min 隨機數最小值 預設為0
 * @param {Number} max 隨機數最小值 預設為100
 */
exports.getRandom = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}