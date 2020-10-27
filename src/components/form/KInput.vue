<template>
    <div class="k-input">
        <input :type="type" v-bind="$attrs" @input="onChange" :value="value"/>
    </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    name: "KInput",
    props: {
      type: {
        type: String,
        default: "text"
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onChange(e) {
        this.$emit('input', e.target.value);

        this.$parent.$emit('validate');
      }
    },
  }
</script>

<style scoped>

</style>
