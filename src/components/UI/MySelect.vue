<template>
    <select :value="modelValue" @change="changeOption">
      <option disabled value="">Выберите из списка</option>
      <option :value="option.value" v-for="option in options" :key="option.value">
        {{ option.name }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    name: "MySelect",
    props: {
      modelValue: {
        type: String,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      changeOption(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
  </script>

<style lang="scss" scoped></style>
