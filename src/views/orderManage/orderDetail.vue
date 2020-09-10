<!--  -->
<template>
  <div class='orderDetail'>
    <div class="cardTitle">订单信息</div>
    <div class="cardBody">
      <el-row>
        <el-col :span="12">
          <span class="label">渠道来源</span>
          <span class="content">微医</span>
        </el-col>
        <el-col :span="12">
          <span class="label">所属企业</span>
          <span class="content">个检</span>
        </el-col>
        <el-col :span="12">
          <span class="label">业务类型</span>
          <span class="content">个检</span>
        </el-col>
        <el-col :span="12">
          <span class="label">订单编号</span>
          <span class="content">TJ202008221234</span>
        </el-col>
        <el-col :span="12">
          <span class="label">订单状态</span>
          <span class="content">预约中</span>
        </el-col>
        <el-col :span="12">
          <span class="label">订单描述</span>
          <span class="content">已付款，未落单</span>
        </el-col>
        <el-col :span="12">
          <span class="label">付款状态</span>
          <span class="content">已付款</span>
        </el-col>
        <el-col :span="12">
          <span class="label">售后状态</span>
          <span class="content">退款中，退款成功</span>
        </el-col>
      </el-row>
    </div>
    <div class="cardTitle">预约信息</div>
    <div class="cardBody">
      <el-row>
        <el-col :span="12">
          <span class="label">姓名</span>
          <span class="content">李丽丽</span>
        </el-col>
        <el-col :span="12">
          <span class="label">性别</span>
          <span class="content">女</span>
        </el-col>
        <el-col :span="12">
          <span class="label">电话号</span>
          <span class="content">18811881188</span>
        </el-col>
        <el-col :span="12">
          <span class="label">身份证号</span>
          <span class="content">211381198808145511</span>
        </el-col>
        <el-col :span="12">
          <span class="label">年龄</span>
          <span class="content">32</span>
        </el-col>
        <el-col :span="12">
          <span class="label">婚姻状态</span>
          <span class="content">未婚</span>
        </el-col>
        <el-col :span="12">
          <span class="label">体检套餐</span>
          <span class="content">体检套餐H（女性）</span>
        </el-col>
        <el-col :span="12">
          <span class="label">体检时间</span>
          <span class="content">2020/08/22 15:37:25</span>
        </el-col>
        <el-col :span="12">
          <span class="label">体检医院</span>
          <span class="content">上海市中医医院</span>
        </el-col>
        <el-col :span="12">
          <span class="label">医院ID</span>
          <span class="content">123</span>
        </el-col>
      </el-row>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="margin-top:20px"
      >
        <el-tab-pane
          label="体检订单"
          name="first"
        >
          <!--  -->
          <el-table
            :data="tableData"
            style="width: 100%;"
            border
            v-loading="listLoading"
          >
            <el-table-column
              prop="orderNumber"
              label="订单编号"
            >
            </el-table-column>
            <el-table-column
              prop="orderStatus"
              label="订单状态"
            >
            </el-table-column>
            <el-table-column
              prop="hospital"
              label="体检医院"
            >
            </el-table-column>
            <el-table-column
              prop="package"
              label="体检套餐"
            >
            </el-table-column>
            <el-table-column
              prop="monney"
              label="商品金额"
            >
            </el-table-column>
            <el-table-column
              prop="realPay"
              label="实付金额"
            >
            </el-table-column>
            <el-table-column
              prop="time"
              label="体检时间"
              width="150"
            >
            </el-table-column>
            <el-table-column
              prop="payTime"
              label="付款时间"
              width="150"
            >
            </el-table-column>
            <el-table-column
              prop="note"
              label="备注"
            >
            </el-table-column>
          </el-table>
          <div class="orderFooter">
            订单总金额：<span class="count">1006.00</span>
            应付金额：<span class="count">1006.00</span>
            实付金额：<span class="count">1006.00</span>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="付款记录"
          name="second"
        >
          <el-table
            :data="payData"
            style="width: 100%;"
            border
            v-loading="listLoading"
          >
            <el-table-column
              prop="payTime"
              label="付款时间"
            >
            </el-table-column>
            <el-table-column
              prop="payMethod"
              label="支付方式"
            >
            </el-table-column>
            <el-table-column
              prop="payMoney"
              label="付款金额"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane
          label="退款记录"
          name="third"
        >
          <el-table
            :data="reFundRecord"
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
              prop="reFundTime"
              label="申请退款时间"
            >
            </el-table-column>
            <el-table-column
              prop="reFundStatus"
              label="退款状态"
            >
            </el-table-column>
            <el-table-column
              prop="payMethod"
              label="支付方式"
            >
            </el-table-column>
            <el-table-column
              prop="reFundMoney"
              label="申请退款金额"
            >
            </el-table-column>
            <el-table-column
              prop="reFundReason"
              label="退款原因"
            >
            </el-table-column>
            <el-table-column
              prop="renFundRealMoney"
              label="实际退款金额"
            >
            </el-table-column>
            <el-table-column
              prop="dealName"
              label="处理客服"
            >
            </el-table-column>
            <el-table-column
              prop="dealTime"
              label="处理时间"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="dealNote"
              label="客服备注"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane
          label="客服备注"
          name="fourth"
        >
          <el-table
            :data="dealList"
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
              prop="dealName"
              label="处理客服"
            >
            </el-table-column>
            <el-table-column
              prop="dealTime"
              label="处理时间"
            >
            </el-table-column>
            <el-table-column
              prop="dealNote"
              label="客服备注"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

    </div>
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
      activeName: 'first',
      listLoading: false,
      tableData: [
        {
          orderNumber: 'TJ202008221234',
          orderStatus: "预约中",
          hospital: "上海市中医医院",
          package: "体检套餐H（女性）",
          monney: "1006.00",
          realPay: "1008.00",
          timeOutResult: "24小时内不处理会导致落单失败",
          time: "2020/08/22 15:37:25",
          payTime: "2020/08/22 15:37:25",
          note: "备注001",
        }
      ],
      payData: [
        {
          payTime: "2020/08/22 15:37:25",
          payMethod: "微信",
          payMoney: "1006.00"
        }
      ],
      reFundRecord: [
        {
          reFundTime: "2020/08/22 15:37:25",
          reFundStatus: "退款中",
          payMethod: "微信",
          reFundMoney: "1006.00",
          reFundReason: "客服说约不上",
          renFundRealMoney: "1",
          dealName: "丽丽",
          dealTime: "2020/08/22 15:37:25",
          dealNote: "处理备注"
        }
      ],
      dealList: [
        {
          dealName: "丽丽",
          dealTime: "2020/08/22 15:37:25",
          dealNote: "处理备注"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
.orderFooter {
  text-align: right;
  margin-top: 20px;
  font-size: 13px;
  .count {
    color: red;
    margin-right: 10px;
  }
}
</style>