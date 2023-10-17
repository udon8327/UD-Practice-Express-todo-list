<template>
  <div class="ud-input-phone">
    <ud-input
      v-model="modelValue[0]"
      @input="onInput(1)"
      ref="input1"
      :placeholder="placeholder[0]"
      type="tel"
      maxlength="4"
    >
    </ud-input>
    <span class="separator">{{ separator }}</span>
    <ud-input
      v-model="modelValue[1]"
      @input="onInput(2)"
      ref="input2"
      :placeholder="placeholder[1]"
      type="tel"
      maxlength="3"
    >
    </ud-input>
    <span class="separator">{{ separator }}</span>
    <ud-input
      v-model="modelValue[2]"
      @input="onInput(3)"
      ref="input3"
      :placeholder="placeholder[2]"
      type="tel"
      maxlength="3"
    >
    </ud-input>
  </div>
</template>

<script>
export default {
  name: 'UdInputPhone',
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: ["", "", ""]
    },
    placeholder: {
      type: Array,
      default: ["", "", ""]
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ""
    }
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
  },
  mounted() {
  },
  methods: {
    onInput() {
      if(this.autoFocus) {
        if(this.modelValue[0].length === 4) {
          this.$refs.input2.focus();
        }
        if(this.modelValue[1].length === 3) {
          this.$refs.input3.focus();
        }
      }
      this.$parent.$emit('validate'); // 通知FormItem校驗
    },
    focus() {
      this.$refs.input.focus();
    }
  }
}
</script>

<style lang="sass" scoped>
.ud-input-phone
  display: flex
  justify-content: center
  align-items: center
  .ud-input:nth-of-type(1)
    flex: 0 0 34%
  .separator
    font-size: 18px
    margin: 0 5px
</style>
