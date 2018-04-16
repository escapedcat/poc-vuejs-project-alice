<template>
  <div>
    <label
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      type="text"
      class="input"
      :value="value"
      v-on="listeners"
    >
  </div>
</template>

<script>
// copied from https://codesandbox.io/s/o29j95wx9

export default {
  props: {
    id: {
      type: String,
      default() {
        // eslint-disable-next-line no-underscore-dangle
        return this._uid.toString();
      },
    },
    value: {
      type: String,
      default: '',
    },
    label: {
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
