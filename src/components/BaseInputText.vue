<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
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
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value),
      };
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
