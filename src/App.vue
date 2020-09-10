<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app {
  .titleTable {
    font-size: 16px;
    margin: 30px 0 10px 0;
    i {
      margin-right: 5px;
    }
  }
  .el-pagination {
    text-align: right;
    margin-top: 10px;
  }
  .cardTitle {
    line-height: 40px;
    background: #eee;
    padding-left: 10px;
  }
  .cardBody {
    margin-top: 11px;
    margin-bottom:20px;
    .label {
      border-right: 1px solid #eee;
      width: 100px;
    }
    .label,
    .content {
      display: inline-block;
      padding: 10px;
    }
    .el-col-12 {
      border: 1px solid #eee;
      margin-top: -1px;
      margin-left: -1px;
      padding: 0 20px;
      font-size: 13px;
    }
  }
}
</style>
