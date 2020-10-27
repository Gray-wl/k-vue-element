<template>
    <div class="k-form">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "KForm",
    provide() {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
    },
    methods: {
      validate(cb) {
        const tasks = this.$children.filter(v => v.prop).map(v => v.validate());
        Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
      }
    },
  }
</script>

<style scoped>

</style>
