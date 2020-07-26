<template>
  <el-container>
    <el-aside><common-aside></common-aside></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
// import CommonHeader from "../components/CommonHeader";
import commonAside from "../components/CommonAside";
export default {
  components: {
    // CommonHeader,
    commonAside
  }
};
</script>
<style lang="scss" scoped></style>
