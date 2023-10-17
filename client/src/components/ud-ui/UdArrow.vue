<template>
  <i 
    class="ud-arrow"
    :class=[direction]
    :style="{
      'border-color': color,
      'border-width': '0 ' + width + 'px ' + width + 'px 0',
      padding: size + 'px'
    }">
  </i>
</template>

<script>
export default {
  name: 'UdArrow',
  props: {
    color: { default: "#333" }, // 顏色
    width: { default: "3" }, // 寬度
    size: { default: "3" }, // 大小
    direction: { default: "right" } //方向
  }
}
</script>

<style lang="sass" scoped>
.ud-arrow
  border: solid black
  border-width: 0 3px 3px 0
  display: inline-block
  padding: 3px
  &.right
    transform: rotate(-45deg)
  &.left
    transform: rotate(135deg)
  &.up
    transform: rotate(-135deg)
  &.down
    transform: rotate(45deg)
</style>
