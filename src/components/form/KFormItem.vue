<template>
    <div class="k-form-item">
        <span v-if="label">{{label}}</span>
        <slot></slot>
        <span v-if="error">{{error}}</span>
    </div>
</template>

<script>
  import Validator from 'async-validator'

  export default {
    name: "KFormItem",
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted() {
      this.$on('validate', () => {
        this.validate();
      });
    },
    methods: {
      validate() {
        const rules = this.form.rules[this.prop];
        const model = this.form.model[this.prop];

        const validator = new Validator({[this.prop]: rules});
        return validator.validate({[this.prop]: model}, errors => {
          if (errors) {
            this.error = errors[0].message;
          } else {
            this.error = '';
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>
