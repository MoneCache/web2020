<template>
  <div>
    <my-form :model="model"
             :rules="rules"
             ref="loginForm">
      <my-form-item label="用户名"
                    prop="username">
        <my-input v-model="model.username"
                  placeholder="请输入用户名"></my-input>
      </my-form-item>
      <my-form-item label="密码"
                    prop="password">
        <my-input v-model="model.password"
                  type="password"></my-input>
      </my-form-item>
      <my-form-item>
        <button @click="onLogin">提交</button>
      </my-form-item>
    </my-form>
    <!-- .sync和v-model有和区别？ -->
    {{model}}
  </div>
</template>

<script>
import myInput from "./myInput";
import myFormItem from "./myItem";
import myForm from "./myForm";
import Notice from "@/test/01-01/notice/Notice";

export default {
  data () {
    return {
      model: { username: "tom", password: "" },
      rules: {
        username: [{ required: true, message: "必填项" }],
        password: [{ required: true, message: "必填项" }]
      }
    };
  },
  components: {
    myInput,
    myFormItem,
    myForm,
    Notice
  },
  methods: {
    onLogin () {
      this.$refs.loginForm.validate(isValid => {
        // if (isValid) {
        //   alert("请求登录！");
        // } else {
        //   alert("校验失败！");
        // }
        this.$create(Notice, {
          title: "社会你杨哥喊你来搬砖",
          message: isValid ? "提请求登录！" : "校验失败！",
          duration: 2000
        }).show();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>