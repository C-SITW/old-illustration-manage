<template>
  <div class="container">
    <div class="bg"></div>
    <!-- from表单 -->
    <div class="forms-container">
      <el-form v-model="loginUser" label-width="0" class="loginFrom">
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="loginUser.username" placeholder="请输入用户名" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            v-model="loginUser.password"
            placeholder="请输入密码"
            show-password
          >
          </el-input>
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            class="submit-btn"
            @click="() => handleloginClick()"
            >登录</el-button
          >
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, reactive } from "vue";
import { post } from "../utils/request";
export default {
  setup() {
    // const { ctx } = getCurrentInstance();
    const loginUser = reactive({
      username: "",
      password: "",
    });

    // 登录
    const handleloginClick = async () => {
      const res = await post("/api/user/login", {
        username: loginUser.username,
        password: loginUser.password,
      });
      if (res.errno === 0) {
        console.log(res);
      } else {
        alert("123");
      }
    };

    return { loginUser, handleloginClick };
  },
};
</script>
<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
  .bg {
    width: 100%;
    height: 50%;
    background: linear-gradient(
      180deg,
      #f05959 0.31%,
      rgba(172, 133, 133, 0) 100%
    );
  }
  .forms-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background: #fff;
    border: 1px solid #ddd4d4;
    box-sizing: border-box;
    border-radius: 50px;
    .loginFrom {
      position: absolute;
      box-sizing: border-box;
      padding: 50px;
      width: 100%;
      bottom: 0;
    }
  }
}
</style>