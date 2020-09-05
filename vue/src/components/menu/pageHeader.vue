<template>
  <div class="page-header-width">
    <div class="header-left">
      <i class="el-icon-menu"></i>
      <span class="ch-ml-sm">个人博客</span>
    </div>

    <div class="header-right">
      <img src="@/assets/default.png"
           style="width: 40px; height: 40px">
      <span class="ch-ml-sm">michaelChen</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pageHeaderIndex'
}
</script>

<style>
.page-header-width {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  padding: 2px 4px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
}
.header-right:hover {
  background-color: rgba(97, 97, 97, 0.1);
}
</style>