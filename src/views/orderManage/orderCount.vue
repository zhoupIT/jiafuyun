<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div
          class="grid-content"
          style=" background: #409EFF;"
        >
          订单总量
          <div class="num">1000</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="grid-content"
          style=" background: #67C23A;"
        >
          预约中订单数量
          <div class="num">600</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="grid-content"
          style=" background: #E6A23C;"
        >
          已体检订单数量
          <div class="num">10</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="grid-content"
          style=" background: #F56C6C;"
        >
          退款订单数量
          <div class="num">0</div>
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%;margin-top:30px"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {

  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.grid-content {
  height: 100px;
  border-radius: 2px;
  color: #fff;
  padding: 20px;
  .num {
    margin-top: 10px;
  }
}

.bg-purple-dark {
  background: #67c23a;
}
.bg-purple {
  background: #e6a23c;
}
.bg-purple-light {
  background: #f56c6c;
}
</style>