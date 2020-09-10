<!--  -->
<template>
<div class='hospitalManage'>
  <el-form
    :model="filter"
    ref="filter"
    label-width="100px">
    <el-row :gutter="40">

      <el-col :span="6">
        <el-form-item
          label="医院名称："
          prop="hospitalName"
        >
          <el-input
            v-model="filter.hospitalName"
            placeholder="请输入医院名称"
            size="small"
          ></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="6">
        <el-form-item
          label="医院等次："
          prop="hospitalRank"
        >
          <el-select
            v-model="filter.hospitalRank"
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
              label="甲等"
              value="2"
            ></el-option>
            <el-option
              label="乙等"
              value="3"
            ></el-option>
            <el-option
              label="丙等"
              value="3"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <el-form-item
          label="医院级别："
          prop="hospitalLevel"
        >
          <el-select
            v-model="filter.hospitalLevel"
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
              label="一级"
              value="2"
            ></el-option>
            <el-option
              label="二级"
              value="3"
            ></el-option>
            <el-option
              label="三级"
              value="3"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40">
        <el-col :span="6">
          <el-form-item label="创建时间：" prop="createTime">
            <el-date-picker
              v-model="filter.createTime"
              type="date"
              placeholder="选择日期"
              :clearable="false"
              size="small"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>

      <el-col :span="6">
        <el-form-item
          label="上架状态："
          prop="hospitalStatus"
        >
          <el-select
            v-model="filter.hospitalStatus"
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
              label="已上线"
              value="2"
            ></el-option>
            <el-option
              label="已下线"
              value="3"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>


      </el-row>
    <el-row :gutter="40">
        <el-col>
          <el-form-item>
            <el-button size="small"  type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
  </el-form>
  <el-form>
  <el-row :gutter="40">
    <el-col>
      <el-form-item>
        <el-button size="small"  type="primary" icon="el-icon-plus" @click="addDidClicked">新增</el-button>
        <el-button size="small"  type="primary" icon="el-icon-refresh">数据更新</el-button>
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
    <el-table-column type="index" label="序号" width="50"></el-table-column>
    <el-table-column prop="hospitalID" label="医院编号"></el-table-column>
    <el-table-column prop="hospitalName" label="医院名称"></el-table-column>
    <el-table-column prop="hospitalType" label="医院类型"></el-table-column>
    <el-table-column prop="hospitalLevel" label="医院等次"></el-table-column>
    <el-table-column prop="hospitalStatus" label="上架状态"></el-table-column>
    <el-table-column prop="hospitalPackage" label="体检套餐"></el-table-column>
    <el-table-column prop="createTime" label="创建时间"></el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button type="text">编辑</el-button>
        <el-button type="text" @click="deleteDidClicked">删除</el-button>
        <el-button type="text" >下架</el-button>
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

</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

import * as api from "@/api/api";
export default {
// import引入的组件需要注入到对象中才能使用
components: {},
data() {
// 这里存放数据
  return {
    listLoading: false,
    filter: {
      hospitalName:"",
      hospitalRank:"",
      hospitalLevel:"",
      createTime: "",
      hospitalStatus:""
    },
    //   time: "",
    pagination: {
      total: 0,
      pageNo: 1,
      pageSize: 20,
      parentId: 0
    },
    ListData: [{
      hospitalID: '123',
      hospitalName: "上海市市北医院",
      hospitalType: "公立医院",
      hospitalRank:"甲等",
      hospitalLevel: "综合三级",
      hospitalStatus: "已上架",
      hospitalPackage: "套餐A",
      createTime: "2020/8/20 15:30:20"
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
  handleSizeChange(val) {
    this.pagination.pageSize = val;
    this.loadList();
  },
  handleCurrentChange(val) {
    this.pagination.pageNo = val;
    this.loadList();
  },
  loadList:function() {

  },
  addDidClicked:function() {
    this.$router.push({
      path: "/physicalExaminationManage/addHospital",
      query: {
        id: 0
      }
    })
  },
  deleteDidClicked:function() {
    console.log('1111');
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '删除成功!'
      });
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    });
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>

</style>
