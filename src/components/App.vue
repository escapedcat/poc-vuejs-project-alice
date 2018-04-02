<template>
  <div class="wrapper">
    {{ message }}

    <TextInput />
  </div>
</template>

<script>
  import TextInput from "./BaseInputText.vue"

  export default {
    name: 'App',
    components: {
      TextInput
    },
    data() {
      return {
      message: 'Hello Vue!'
    }
  },
  }
</script>

<style lang="scss">
.wrapper {
  padding: 2rem;
  background: lightgrey;
}
</style>
