<!--  -->
<template>
  <div class='orderList'>
    <el-row
      style="width: 100%;"
      class="box-title"
    >
      <el-form
        :model="filter"
        ref="filter"
        label-width="100px"
      >
        <el-row :gutter="40">
          <el-col :span="6">
            <el-form-item
              label="订单状态："
              prop="orderStatus"
            >
              <el-select
                v-model="filter.orderStatus"
                placeholder="请选择"
                clearable
                size="small"
                style="width:100%"
              >
                <el-option
                  label="全部"
                  value="1"
                ></el-option>
                <el-option
                  label="预约中"
                  value="2"
                ></el-option>
                <el-option
                  label="预约成功"
                  value="3"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item
              label="订单编号："
              prop="orderNum"
            >
              <el-input
                v-model="filter.orderNum"
                placeholder="请输入订单编号"
                size="small"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="付款时间："
              prop="payTime"
            >
              <el-date-picker
                v-model="filter.payTime"
                type="daterange"
                format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                placeholder="请选择起止时间"
                :clearable="false"
                size="small"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="">
          <el-col>
            <el-form-item>
              <el-button
                size="small"
                type="primary"
              >查询</el-button>
              <el-button size="small">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        :data="ListData"
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
          prop="channelSource"
          label="渠道来源"
        >
        </el-table-column>

        <el-table-column
          prop="orderStatus"
          label="订单状态"
        >
          <template slot-scope="scope">
            <span style="margin-right:10px">{{scope.row.orderStatus}}</span>
            <el-button
              @click="changeStatus(scope.row)"
              type="primary"
              size="mini"
            >修改状态</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="userInfo"
          label="体检人信息"
        >
          <template slot-scope="scope">
            <span v-html="scope.row.userInfo"></span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
            >查看</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">添加备注</el-button>
            <el-button type="text">重新发送短信</el-button>
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
    </el-row>
    <el-dialog
      title="修改订单状态"
      :visible.sync="statusFormVis"
      class="newImg"
      :before-close="handleClose"
      width="30%"
    >
      <el-form
        :model="statusForm"
        :rules="rules"
        ref="imgForm"
        label-width="150px"
      >
        <el-form-item
          label="订单状态："
          prop="status"
        >
          <el-select
            v-model="statusForm.status"
            placeholder="请选择"
            clearable
            size="small"
            style="width:100%"
          >
            <el-option
              label="全部"
              value="1"
            ></el-option>
            <el-option
              label="预约中"
              value="2"
            ></el-option>
            <el-option
              label="预约成功"
              value="3"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="statusFormVis=false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import * as api from '@/api/api';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      listLoading: false,
      filter: {
        orderStatus: "",
        orderDes: "",
        orderNum: "",
        payTime: ""
      },
      //   time: "",
      pagination: {
        total: 0,
        pageNo: 1,
        pageSize: 20,
        parentId: 0
      },
      ListData: [{
        channelSource: '微医',
        orderStatus: "预约中",
        userInfo: "姓名：李乐乐<br/>电话号：18811881188<br/身份证：123<br/>性别：<br/>婚姻状况：未婚",
        timeoutStatus: "即将超时",
        timeOutResult: "24小时内不处理会导致落单失败",
        orderNum: 72,
        des: "距用户体检时间还有72小时，尚未处理订单"
      }],
      statusForm: {
        status: ''
      },
      rules: {
        status: [{
          required: true,
          trigger: "change",
          message: '请选择'
        }],
      },
      statusFormVis: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    },
    changeStatus: function () {
      this.statusFormVis = true
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.loadList();
    },
    handleCurrentChange(val) {
      this.pagination.pageNo = val;
      this.loadList();
    },
    loadList: function () {

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
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
</style>