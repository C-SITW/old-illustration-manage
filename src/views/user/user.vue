<template>
  <!-- 面包屑导航 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>

  <!-- 卡片视图区 -->
  <el-card class="box-card">
    <!-- 搜索功能 -->
    <el-row :gutter="20">
      <el-col :span="6" />
      <el-col :span="6" />
      <el-col :span="6" />
      <el-col :span="6">
        <el-input
          v-model="input3"
          placeholder="请输入搜索内容"
          class="input-with-select"
        >
          <template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <!-- 用户列表区域 -->
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" type="index" label="#" />
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="用户名" label="用户名" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="角色" />
      <el-table-column label="状态"> </el-table-column>
      <el-table-column label="操作" />
    </el-table>
  </el-card>
</template>
<script>
export default {
  name: "",
  setup() {
    const tableData = [
      {
        date: "2016-05-03",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-08",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-06",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-07",
        用户名: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];

    return { tableData };
  },
};
</script>
<style lang='scss' scoped>
</style>