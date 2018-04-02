<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="inputListeners"
  >
</template>

<script>
// copied from https://codesandbox.io/s/o29j95wx9

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputListeners() {
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid aquamarine;
}
</style>
