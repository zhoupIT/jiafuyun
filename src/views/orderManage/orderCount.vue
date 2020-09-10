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
    <div class="titleTable">
      <i
        class="el-icon-warning "
        style="color:red"
      ></i>数据预警
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;"
      border
      v-loading="listLoading"
    >
      <el-table-column
        type="index"
        label="序号"
        width="50"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="预警订单状态"
      >
      </el-table-column>
      <el-table-column
        prop="timeoutStatus"
        label="超时状态"
      >
        <template slot-scope="scope">
          <i
            class="el-icon-warning "
            :style="scope.row.timeoutStatus=='即将超时'?'color:#409eff':'color:red'"
          ></i>
          {{ scope.row.timeoutStatus }}
        </template>
      </el-table-column>
      <el-table-column
        prop="timeOutResult"
        label="超时后果"
      >
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="订单数量"
      >
      </el-table-column>
      <el-table-column
        prop="des"
        label="规则描述"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
           
          >查看所有订单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.pageNo"
      :page-sizes="[5, 10, 20]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
    >
    </el-pagination>
    <div class="titleTable">
      超时导致落单失败订单
    </div>
    <el-table
      :data="timeOutList"
      style="width: 100%;"
      border
      v-loading="timeOutListLoading"
    >
      <el-table-column
        type="index"
        label="序号"
        width="50"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态"
      >
      </el-table-column>
      <el-table-column
        prop="timeoutStatus"
        label="超时状态"
      >
      </el-table-column>
      <el-table-column
        prop="des"
        label="规则描述"
      >
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="订单数量"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
          >查看所有订单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeTimeOutChange"
      @current-change="handleCurrentTimeOutChange"
      :current-page="pagination.pageNo"
      :page-sizes="[5, 10, 20]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
    >
    </el-pagination>
  </div>
</template>
<script>
import * as api from "@/api/api";
export default {
  data() {
    return {
      pagination: {
        total: 0,
        pageNo: 1,
        pageSize: 5,
        parentId: 0
      },
      paginationTimeout: {
        total: 0,
        pageNo: 1,
        pageSize: 5,
        parentId: 0
      },
      tableData: [
        {
          status: '预约中订单',
          timeoutStatus: "即将超时",
          timeOutResult: "24小时内不处理会导致落单失败",
          orderNum: 72,
          des: "距用户体检时间还有72小时，尚未处理订单"
        },
        {
          status: '预约中订单',
          timeoutStatus: "已经超时",
          timeOutResult: "影响对账",
          orderNum: 72,
          des: "距用户体检时间还有24小时，尚未处理订单"
        }
      ],
      timeOutList: [
        {
          status: '预约中订单',
          timeoutStatus: "即将超时",
          des: "距用户体检时间还有72小时，尚未处理订单",
          orderNum: 72,
        },
      ],
      listLoading: false,
      timeOutListLoading: false
    }
  },
  methods: {
    /* 超时导致落单失败订单 */
    loadTimeoutList: function () {

    },
    //* 数据预警 */
    loadList: function () {
      // 获取表单请求接口
      /*  this.listLoading = true;
       this.$http.get(api.GetPagedDepartments, {
         params: formData
       }).then(res => {
         this.ListData = res.data.result.items
         this.pagination.total = res.data.result.totalCount;
         this.listLoading = false;
       }).catch(error => {
         this.listLoading = false;
         this.$message.error(error.response.data.error.message);
       }); */
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.loadList();
    },
    handleCurrentChange(val) {
      this.pagination.pageNo = val;
      this.loadList();
    },
    handleSizeTimeOutChange(val) {
      this.paginationTimeout.pageSize = val;
      this.loadTimeoutList();
    },
    handleCurrentTimeOutChange(val) {
      this.paginationTimeout.pageNo = val;
      this.loadTimeoutList();
    },
    handleClick: function (row) {
      this.$router.push({
        path: "/orderManage/orderDetail",
        query: {
          id: 0
        }
      })
    }
  },
  created() {

  },
  mounted() {
    this.loadTimeoutList()
    this.loadList()
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