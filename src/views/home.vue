<template>
  <el-container>
    <!-- 左侧边栏 -->
    <el-collapse-transition>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- logo -->
        <img class="logo" src="../assets/images/logo.svg" />
        <!-- 折叠模块 -->
        <div class="toggle-btn" @click="handletoggleClick" i>
          {{ isCollapse ? "→" : "←" }}
        </div>
        <!-- 左侧菜单区 -->
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          :collapse="isCollapse"
          :default-active="activePath"
          router
        >
          <!-- 一级菜单 -->
          <el-sub-menu
            v-for="item in menulist"
            :key="item.id"
            :index="item.path"
          >
            <!-- 一级菜单模板 -->
            <template #title>
              <i class="iconfont" v-html="item.icon"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单选项 -->
            <el-menu-item
              v-for="item in item.children"
              :key="item.id"
              :index="item.path"
              @click="saveNavState(item.path)"
            >
              <i class="el-icon-menu"></i>
              <span>{{ item.authName }}</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
    </el-collapse-transition>

    <!-- 右侧 -->
    <el-container>
      <!-- 右侧头部 -->
      <el-header>
        <div class="">旧图插画后台管理系统</div>
        <el-button type="danger">退出</el-button>
      </el-header>
      <!-- 右侧内容区 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { reactive, ref } from "vue-demi";
export default {
  setup() {
    const menulist = reactive([
      {
        id: 1,
        authName: "作家管理",
        path: "creator",
        icon: "&#xe613;",
        children: [
          { id: 110, authName: "艺术家", path: "astrs1" },
          { id: 111, authName: "雕刻家", path: "astrs2" },
        ],
      },
      {
        id: 2,
        authName: "插画管理",
        path: "Illustration",
        icon: "&#xe615;",
        children: [
          { id: 120, authName: "模板", path: "astrs3" },
          { id: 121, authName: "测试", path: "astrs4" },
        ],
      },
      {
        id: 3,
        authName: "评论管理",
        path: "comment",
        icon: "&#xe8b4;",
        children: [],
      },
      {
        id: 4,
        authName: "用户管理",
        path: "users",
        icon: "&#xe614;",
        children: [
          {
            id: 130,
            authName: "用户列表",
            path: "user",
            children: [],
          },
        ],
      },
      {
        id: 5,
        authName: "权限管理",
        path: "rights",
        icon: "&#xe686;",
        children: [],
      },
    ]);

    // 处理侧边栏展开
    const isCollapse = ref(false);
    const handletoggleClick = () => {
      isCollapse.value = !isCollapse.value;
    };

    // 保存菜单选中状态
    const activePath = ref(localStorage.path);

    const saveNavState = (path) => {
      localStorage.path = path;
      activePath.value = path;
    };

    return {
      menulist,
      isCollapse,
      activePath,
      handletoggleClick,
      saveNavState,
    };
  },
};
</script>
<style lang='scss' scoped>
.el-container {
  height: 100%;
}
.el-aside {
  position: relative;
  background-color: #545c64;
  &::-webkit-scrollbar {
    display: none;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .toggle-btn {
    position: absolute;
    right: -25px;
    bottom: 20px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(70, 62, 62);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }
  .iconfont {
    font-size: 18px;
    margin-right: 10px;
  }
  .el-menu {
    border: none;
    position: absolute;
    top: 100px;
    width: 100%;
  }
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(83, 77, 77);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}
.el-main {
  background-color: rgb(233, 225, 225);
}
</style>