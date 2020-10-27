<template>
    <div class="form">
        <k-form :model="model" :rules="rules" ref="kForm">
            <k-form-item label="用户名" prop="username">
                <k-input placeholder="请输入用户名" type="text" v-model="model.username"/>
            </k-form-item>
            <k-form-item label="密码" prop="password">
                <k-input placeholder="请输入密码" type="password" v-model="model.password"/>
            </k-form-item>
            <k-form-item>
                <button @click="login">登录</button>
            </k-form-item>
        </k-form>
    </div>
</template>

<script>
  // @ is an alias to /src
  import KInput from '@/components/form/KInput.vue'
  import KFormItem from '@/components/form/KFormItem.vue'
  import KForm from '@/components/form/KForm.vue'

  export default {
    name: 'Form',
    components: {
      KInput,
      KFormItem,
      KForm
    },
    data() {
      return {
        model: {
          username: '',
          password: ''
        },
        rules: {
          username: [{required: true, message: "用户名为必填项"}],
          password: [{required: true, message: "请输入密码"}],
        }
      }
    },
    methods: {
      login() {
        this.$refs.kForm.validate(isValid => {
          this.KNotice({
            title: "提示",
            message: isValid ? "请求登录!" : "校验失败!",
            duration: 3000,
          })
        });
      }
    },
  }
</script>
