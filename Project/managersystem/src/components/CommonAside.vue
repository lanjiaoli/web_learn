<template>
  <el-col :span="12" id="el-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#33aef1"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "home"
        },
        {
          path: "/user",
          label: "视频管理",
          icon: "video-play"
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user"
        },
        {
          label: "用户管理",
          icon: "user",
          children: [
            {
              path: "/page1",
              label: "用户管理",
              icon: "user"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
el-menu     {
  height: 100%;
}
</style>
