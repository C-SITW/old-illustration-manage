<template>
  <!-- 面包屑导航 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>管理用户列表</el-breadcrumb-item>
  </el-breadcrumb>

  <!-- 卡片视图区 -->
  <el-card class="box-card">
    <!-- 顶部功能区域 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 添加用户按钮 -->
        <el-button type="primary" @click="centerDialogVisible = true"
          >添加用户</el-button
        >
      </el-col>
      <el-col :span="6" />
      <el-col :span="6" />
      <el-col :span="6">
        <!-- 搜索功能 -->
        <el-input
          v-model="searchinput"
          placeholder="请输入搜索内容"
          clearable
          @clear="handelClearValue"
        >
          <template #append>
            <el-button icon="el-icon-search" />
          </template>
        </el-input>
      </el-col>
    </el-row>
    <!-- 用户列表区域 -->
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" type="index" label="#" />
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="role_name" label="角色" />
      <el-table-column prop="mg_state" label="状态">
        <template v-slot="scope">
          <el-switch v-model="scope.row.mg_state" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <!-- 编辑按钮 -->
          <el-button type="primary" size="small" icon="el-icon-edit" />
          <!-- 分配角色按钮 -->
          <el-tooltip
            effect="dark"
            content="权限管理"
            placement="top"
            :enterable="false"
          >
            <el-button type="warning" size="small" icon="el-icon-setting" />
          </el-tooltip>

          <!-- 删除按钮 -->
          <el-button type="danger" size="small" icon="el-icon-delete" />
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页功能区域 -->
    <el-pagination
      v-model:currentPage="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>

    <!-- 添加用户对话框 -->
    <el-dialog
      v-model="centerDialogVisible"
      title="添加用户"
      width="30%"
      center
    >
      <!-- 主体内容区域 -->
      <span
        >It should be noted that the content will not be aligned in center by
        default</span
      >

      <!-- 底部区域 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<script>
import { ref } from "vue-demi";
export default {
  name: "",
  setup() {
    const tableData = [
      {
        date: "2016-05-03",
        username: "SITW",
        role_name: "超级管理员",
        mg_state: true,
      },
      {
        date: "2016-05-03",
        username: "测试用户",
        role_name: "demo",
        mg_state: false,
      },
    ];

    const searchinput = ref("");

    // 控制添加用户对话框的显示与隐藏
    const centerDialogVisible = ref(false);

    // 清除搜索内容
    const handelClearValue = () => {
      alert("清空啦！");
    };

    return { tableData, searchinput, handelClearValue, centerDialogVisible };
  },
};
</script>
<style lang='scss' scoped>
</style>
